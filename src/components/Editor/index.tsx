"use client";
import { useState, useCallback, FC, useEffect } from "react";
import {
  AvailableComponent,
  SelectedComponent,
  SelectedInnerElement,
} from "@/types/editor";
import { COMPONENTS_LIST_WITH_CATEGORY } from "@/constants/ComponentsCategory";
import { useEditorStore } from "@/store/editorStore";
import dynamic from "next/dynamic";
import LogoWrapper from "../SharedComponents/LogoWrapper";
const SidebarWrapper = dynamic(
  () => import("@/components/Editor/Sidebar/index")
);
const CanvasWrapper = dynamic(() => import("@/components/Editor/Canvas/index"));
const PropertiesWrapper = dynamic(
  () => import("@/components/Editor/Properties/PropertiesWrapper")
);

const EditorPage: FC = () => {
  const { lastDeletedElementInfo, setLastDeletedElementInfo } =
    useEditorStore();

  const [selectedComponents, setSelectedComponents] = useState<
    SelectedComponent[]
  >([]);

  const [activeComponent, setActiveComponent] =
    useState<SelectedComponent | null>(null);

  // New state for selected inner element
  const [selectedInnerElement, setSelectedInnerElement] =
    useState<SelectedInnerElement | null>(null);

  const [sidebarComponentsList, setSidebarComponentsList] = useState<
    AvailableComponent[]
  >(COMPONENTS_LIST_WITH_CATEGORY);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const response = await fetch("/api/component-list");
      const data = await response.json();
      if (data.success) {
        setSidebarComponentsList(data.result);
      } else {
        console.error("Failed to fetch components list");
      }
    } catch (error) {
      console.error("Error fetching components list:", error);
    }
  };

  const handleInnerElementRestore = useCallback(() => {
    if (!lastDeletedElementInfo) return;

    const { componentId, outerHTML, parentElementId, nextSiblingElementId } =
      lastDeletedElementInfo;
    const componentToUpdate = selectedComponents.find(
      (comp) => comp.id === componentId
    );

    if (componentToUpdate) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(
        componentToUpdate.htmlContent,
        "text/html"
      );

      let targetParent: HTMLElement | null = null;
      if (parentElementId) {
        targetParent = doc.querySelector(
          `[data-element-id="${parentElementId}"]`
        ) as HTMLElement;
      } else {
        targetParent = doc.body;
      }

      if (targetParent) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = outerHTML;
        const elementToRestore = tempDiv.firstChild as HTMLElement;

        if (elementToRestore) {
          const nextSiblingElement = nextSiblingElementId
            ? targetParent.querySelector(
                `[data-element-id="${nextSiblingElementId}"]`
              )
            : null;

          if (nextSiblingElement) {
            targetParent.insertBefore(elementToRestore, nextSiblingElement);
          } else {
            targetParent.appendChild(elementToRestore);
          }

          const newHtmlContent = doc.body.innerHTML;
          setSelectedComponents((prevComponents) =>
            prevComponents.map((comp) =>
              comp.id === componentId
                ? { ...comp, htmlContent: newHtmlContent }
                : comp
            )
          );
          setLastDeletedElementInfo(null);

          const restoredElementId =
            elementToRestore.getAttribute("data-element-id") || "";
          const restoredElementClasses = elementToRestore.className;
          const restoredElementInnerText = Array.from(
            elementToRestore.childNodes
          )
            .filter((n) => n.nodeType === Node.TEXT_NODE)
            .map((n) => n.textContent)
            .join("")
            .trim();
          const restoredElementTagName = elementToRestore.tagName.toLowerCase();

          setSelectedInnerElement({
            componentId: componentId,
            elementId: restoredElementId,
            classes: restoredElementClasses,
            innerText: restoredElementInnerText,
            tagName: restoredElementTagName,
          });
        }
      } else {
        console.error("Target parent not found for restoration.");
      }
    }
  }, [lastDeletedElementInfo, selectedComponents, setLastDeletedElementInfo]);

  return (
    <div className="flex h-screen bg-gray-100 overflow-auto">
      <div>
        <div className="bg-white p-2 pl-1">
          <LogoWrapper width="70" height="49" fontSizeClass="text-[20px]" />
        </div>
        <SidebarWrapper
          sidebarComponentsList={sidebarComponentsList}
          selectedComponents={selectedComponents}
          setSelectedComponents={setSelectedComponents}
          setActiveComponent={setActiveComponent}
          setSelectedInnerElement={setSelectedInnerElement}
        />
      </div>
      <CanvasWrapper
        selectedComponents={selectedComponents}
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
        setSelectedComponents={setSelectedComponents}
        selectedInnerElement={selectedInnerElement}
        setSelectedInnerElement={setSelectedInnerElement}
      />
      <PropertiesWrapper
        handleInnerElementRestore={handleInnerElementRestore}
        selectedInnerElement={selectedInnerElement}
        setSelectedInnerElement={setSelectedInnerElement}
        activeComponent={activeComponent}
        selectedComponents={selectedComponents}
        setSelectedComponents={setSelectedComponents}
      />
    </div>
  );
};

export default EditorPage;
