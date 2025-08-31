"use client";
import { useEditorStore } from "@/store/editorStore";
import { AvailableComponent, SelectedComponent, SelectedInnerElement } from "@/types/editor";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
const UIComponentsListSidebar = dynamic(
  () => import("@/components/Editor/Sidebar/UIComponentsListSidebar")
);
const SecondSidebar = dynamic(
  () => import("@/components/Editor/Sidebar/SecondSidebar")
);

export default function SidebarWrapper({
  sidebarComponentsList,
  selectedComponents,
  setSelectedComponents,
  setActiveComponent,
  setSelectedInnerElement,
}: {
  sidebarComponentsList: AvailableComponent[];
  selectedComponents: SelectedComponent[];
  setSelectedComponents: (components: SelectedComponent[]) => void;
  setActiveComponent: (component: SelectedComponent | null) => void;
  setSelectedInnerElement: (element: SelectedInnerElement | null) => void;
}) {
  const [hoveredComponent, setHoveredComponent] =
    useState<AvailableComponent | null>(null);

  const { setLastDeletedElementInfo } = useEditorStore();

  const handleMouseLeaveSidebarArea = () => {
    setHoveredComponent(null);
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
        htmlContent: assignUniqueIdsToHtml(sampleDefinition.html || ""),
      };

      setSelectedComponents([...selectedComponents, newComponent]);
      setActiveComponent(newComponent);
      setSelectedInnerElement(null);
      setHoveredComponent(null);
      setLastDeletedElementInfo(null);
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

  return (
    <div className="relative flex" onMouseLeave={handleMouseLeaveSidebarArea}>
      <UIComponentsListSidebar
        sidebarComponentsList={sidebarComponentsList}
        setHoveredComponent={setHoveredComponent}
        hoveredComponent={hoveredComponent}
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
  );
}
