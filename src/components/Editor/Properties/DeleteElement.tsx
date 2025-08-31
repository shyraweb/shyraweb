import { DeleteElementProps } from "@/types/editor";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useEditorStore } from "@/store/editorStore";

export default function DeleteElement({
  componentId,
  elementId,
  selectedComponents,
  setSelectedComponents,
  setSelectedInnerElement,
}: DeleteElementProps) {
  const { setLastDeletedElementInfo } = useEditorStore();

  const handleInnerElementDelete = useCallback(() => {
    const componentToUpdate = selectedComponents.find(
      (comp) => comp.id === componentId
    );
    if (!componentToUpdate) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(
      componentToUpdate.htmlContent,
      "text/html"
    );
    const elementToDelete = doc.querySelector(
      `[data-element-id="${elementId}"]`
    );

    if (elementToDelete && elementToDelete.parentNode) {
      const parentElement = elementToDelete.parentNode as HTMLElement;
      const nextSibling = elementToDelete.nextElementSibling;
      const nextSiblingElementId = nextSibling
        ? nextSibling.getAttribute("data-element-id")
        : null;

      setLastDeletedElementInfo({
        componentId: componentId,
        elementId: elementId,
        outerHTML: elementToDelete.outerHTML,
        parentElementId: parentElement.getAttribute("data-element-id") || null,
        nextSiblingElementId: nextSiblingElementId,
        tagName: elementToDelete.tagName.toLowerCase(),
      });

      parentElement.removeChild(elementToDelete);
      const newHtmlContent = doc.body.innerHTML;

      setSelectedComponents((prevComponents) =>
        prevComponents.map((comp) =>
          comp.id === componentId
            ? { ...comp, htmlContent: newHtmlContent }
            : comp
        )
      );
      setSelectedInnerElement(null);
    }
  }, [
    componentId,
    elementId,
    selectedComponents,
    setLastDeletedElementInfo,
    setSelectedComponents,
    setSelectedInnerElement,
  ]);

  return (
    <Button
      onClick={handleInnerElementDelete}
      className="bg-white border-red-500 text-center w-full rounded-md h-10 relative text-black text-xl font-semibold border group"
    >
      <div className="bg-red-600 rounded-md h-[40px] w-1/4 grid place-items-center absolute left-0 top-[-1px] group-hover:w-full z-10 duration-500">
        <Trash2 className="text-white" />
      </div>
      <p className="translate-x-4 font-semibold text-xs">Delete Element</p>
    </Button>
  );
}
