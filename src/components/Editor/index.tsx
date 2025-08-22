import { useState, useCallback, FC, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import EditorComponentWrapper from "@/components/Editor/EditorComponentWrapper";
import {
  AvailableComponent,
  SelectedComponent,
  SelectedInnerElement,
  LastDeletedElementInfo,
} from "@/types/editor";
import CanvasHeader from "@/components/Editor/CanvasHeader";
import UIComponentsListSidebar from "@/components/Editor/UIComponentsListSidebar";
import SecondSidebar from "@/components/Editor/SecondSidebar";
import PropertiesWrapper from "@/components/Editor/PropertiesWrapper";
import CanvasSection from "@/components/Editor/CanvasSection";
import { COMPONENTS_LIST_WITH_CATEGORY } from "@/constants/ComponentsCategory";

const EditorPage: FC = () => {
  const [selectedComponents, setSelectedComponents] = useState<
    SelectedComponent[]
  >([]);
  const [activeComponent, setActiveComponent] =
    useState<SelectedComponent | null>(null);
  const [hoveredComponent, setHoveredComponent] =
    useState<AvailableComponent | null>(null);

  // New state for selected inner element
  const [selectedInnerElement, setSelectedInnerElement] =
    useState<SelectedInnerElement | null>(null);

  // New state to track the last deleted element for restoration
  const [lastDeletedElementInfo, setLastDeletedElementInfo] =
    useState<LastDeletedElementInfo | null>(null);

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
        console.log("Fetched components list:", data.result);
        setSidebarComponentsList(data.result);
      } else {
        console.error("Failed to fetch components list");
      }
    } catch (error) {
      console.error("Error fetching components list:", error);
    }
  };

  const assignUniqueIdsToHtml = (htmlString: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    let idCounter = 0;

    const traverseAndAssignIds = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        if (!element.hasAttribute("data-element-id")) {
          element.setAttribute("data-element-id", `el-${idCounter++}`);
        }
        for (const child of Array.from(element.children)) {
          traverseAndAssignIds(child);
        }
      }
    };

    traverseAndAssignIds(doc.body);
    return doc.body.innerHTML;
  };

  const addComponent = (componentType: string, sampleId: string) => {
    const componentDefinition = sidebarComponentsList.find(
      (comp) => comp.id === componentType
    );
    const sampleDefinition = componentDefinition?.samples?.find(
      (s) => s._id === sampleId
    );

    if (componentDefinition && sampleDefinition) {
      const newComponent: SelectedComponent = {
        id: `${componentType}-${sampleId}-${Date.now()}`,
        type: componentType,
        name: componentDefinition.name,
        _id: sampleId,
        props: {},
        htmlContent: assignUniqueIdsToHtml(sampleDefinition.html || ""),
      };

      setSelectedComponents([...selectedComponents, newComponent]);
      setActiveComponent(newComponent);
      setSelectedInnerElement(null);
      setHoveredComponent(null);
      setLastDeletedElementInfo(null);
    }
  };

  const removeComponent = (componentId: string) => {
    setSelectedComponents(
      selectedComponents.filter((comp) => comp.id !== componentId)
    );
    if (activeComponent && activeComponent.id === componentId) {
      setActiveComponent(null);
      setSelectedInnerElement(null);
      setLastDeletedElementInfo(null);
    }
  };

  const moveComponent = (componentId: string, direction: "up" | "down") => {
    const currentIndex = selectedComponents.findIndex(
      (comp) => comp.id === componentId
    );
    if (currentIndex === -1) return;

    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex >= 0 && newIndex < selectedComponents.length) {
      const newComponents = [...selectedComponents];
      [newComponents[currentIndex], newComponents[newIndex]] = [
        newComponents[newIndex],
        newComponents[currentIndex],
      ];
      setSelectedComponents(newComponents);
    }
  };

  const handleMouseLeaveSidebarArea = () => {
    setHoveredComponent(null);
  };

  const handleCodeSave = (id: string, newHtml: string) => {
    setSelectedComponents(
      selectedComponents.map((comp) =>
        comp.id === id ? { ...comp, htmlContent: newHtml } : comp
      )
    );
    setSelectedInnerElement(null);
    setLastDeletedElementInfo(null);
  };

  const handleInnerElementSelect = useCallback(
    (
      componentId: string,
      elementId: string,
      classes: string,
      tagName: string
    ) => {
      setActiveComponent(
        selectedComponents.find((comp) => comp.id === componentId) || null
      );

      const componentHtml = selectedComponents.find(
        (comp) => comp.id === componentId
      )?.htmlContent;
      let directInnerText = "";

      if (componentHtml) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(componentHtml, "text/html");
        const element = doc.querySelector(`[data-element-id="${elementId}"]`);
        if (element) {
          Array.from(element.childNodes).forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              directInnerText += node.textContent;
            }
          });
        }
      }

      setLastDeletedElementInfo(null);
      setSelectedInnerElement({
        componentId,
        elementId,
        classes,
        innerText: directInnerText.trim(),
        tagName,
      });
    },
    [selectedComponents]
  );

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
  }, [lastDeletedElementInfo, selectedComponents]);

  const renderComponent = (component: SelectedComponent, index: number) => {
    const commonProps = {
      id: component.id,
      name: component.name,
      props: component.props,
      onRemove: removeComponent,
      onSelect: setActiveComponent,
      isActive: activeComponent?.id === component.id,
      sampleId: component._id,
      onMove: moveComponent,
      isFirst: index === 0,
      isLast: index === selectedComponents.length - 1,
      htmlContent: component.htmlContent,
      onSave: handleCodeSave,
      onInnerElementSelect: handleInnerElementSelect,
      selectedInnerElementId:
        selectedInnerElement?.componentId === component.id
          ? selectedInnerElement.elementId
          : null,
    };
    return <EditorComponentWrapper key={component.id} {...commonProps} />;
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div>
        <h1 className="h-[65px] text-xl font-bold text-gray-800 flex items-center pl-3">
          KB Editor
        </h1>
        <div
          className="relative flex"
          onMouseLeave={handleMouseLeaveSidebarArea}
        >
          <UIComponentsListSidebar
            sidebarComponentsList={sidebarComponentsList}
            setHoveredComponent={setHoveredComponent}
          />
          <AnimatePresence>
            {hoveredComponent && hoveredComponent.samples && (
              <SecondSidebar
                id={hoveredComponent.id}
                title={hoveredComponent.name}
                list={hoveredComponent.samples}
                addComponent={addComponent}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
      <main className="flex-1 flex flex-col bg-gray-100">
        <CanvasHeader selectedComponents={selectedComponents} />
        <CanvasSection
          selectedComponents={selectedComponents}
          renderComponent={renderComponent}
        />
      </main>

      <PropertiesWrapper
        lastDeletedElementInfo={lastDeletedElementInfo}
        handleInnerElementRestore={handleInnerElementRestore}
        selectedInnerElement={selectedInnerElement}
        setSelectedInnerElement={setSelectedInnerElement}
        setLastDeletedElementInfo={setLastDeletedElementInfo}
        activeComponent={activeComponent}
        selectedComponents={selectedComponents}
        setSelectedComponents={setSelectedComponents}
      />
    </div>
  );
};

export default EditorPage;
