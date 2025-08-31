"use client";
import { useEditorStore } from "@/store/editorStore";
import { SelectedComponent, SelectedInnerElement } from "@/types/editor";
import dynamic from "next/dynamic";
import { useCallback } from "react";
const CanvasHeader = dynamic(
  () => import("@/components/Editor/Canvas/CanvasHeader")
);
const CanvasSection = dynamic(
  () => import("@/components/Editor/Canvas/CanvasSection")
);
const EditorComponentWrapper = dynamic(
  () => import("@/components/Editor/Canvas/EditorComponentWrapper")
);

export default function CanvasWrapper({
  selectedComponents,
  activeComponent,
  setActiveComponent,
  setSelectedComponents,
  selectedInnerElement,
  setSelectedInnerElement,
}: {
  selectedComponents: SelectedComponent[];
  activeComponent: SelectedComponent | null;
  setActiveComponent: (component: SelectedComponent | null) => void;
  setSelectedComponents: (components: SelectedComponent[]) => void;
  selectedInnerElement: SelectedInnerElement | null;
  setSelectedInnerElement: (element: SelectedInnerElement | null) => void;
}) {
  const { setLastDeletedElementInfo } = useEditorStore();

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
    <main className="flex-1 flex flex-col bg-gray-100">
      <CanvasHeader selectedComponents={selectedComponents} />
      <CanvasSection
        selectedComponents={selectedComponents}
        renderComponent={renderComponent}
      />
    </main>
  );
}
