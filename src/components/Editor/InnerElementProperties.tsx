import { FC } from "react";
import { InnerElementPropertiesProps } from "@/types/editor";
import DeleteElement from "@/components/Editor/DeleteElement";
import EditorElementContent from "@/components/Editor/EditorElementContent";
import TailwindClassWrapper from "@/components/Editor/TailwindClassWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InnerElementProperties: FC<InnerElementPropertiesProps> = ({
  selectedInnerElement,
  setSelectedInnerElement,
  selectedComponents,
  setSelectedComponents,
  setLastDeletedElementInfo,
}) => {
  const { classes, innerText } = selectedInnerElement;

  const updateInnerElementProperties = (
    newClasses: string,
    newInnerText: string
  ) => {
    if (!selectedInnerElement) return;

    const { componentId, elementId } = selectedInnerElement;
    const componentToUpdate = selectedComponents.find(
      (comp) => comp.id === componentId
    );

    if (componentToUpdate) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(
        componentToUpdate.htmlContent,
        "text/html"
      );
      const elementToModify = doc.querySelector(
        `[data-element-id="${elementId}"]`
      ) as HTMLElement;

      if (elementToModify) {
        elementToModify.className = newClasses;
        let nodesToRemove: ChildNode[] = [];
        Array.from(elementToModify.childNodes).forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            nodesToRemove.push(node);
          }
        });
        nodesToRemove.forEach((node) => elementToModify.removeChild(node));

        if (
          newInnerText !== null &&
          newInnerText !== undefined &&
          newInnerText.length > 0
        ) {
          elementToModify.prepend(doc.createTextNode(newInnerText));
        }

        const newHtmlContent = doc.body.innerHTML;

        setSelectedComponents((prevComponents) =>
          prevComponents.map((comp) =>
            comp.id === componentId
              ? { ...comp, htmlContent: newHtmlContent }
              : comp
          )
        );

        setSelectedInnerElement((prev) =>
          prev
            ? {
                ...prev,
                classes: newClasses,
                innerText: newInnerText,
              }
            : null
        );
      }
    }
  };

  return (
    <div className="space-y-4 max-h-[50%] overflow-y-auto custom-scrollbar">
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={["item-2","item-3"]}
      >
        {/* <AccordionItem value="item-1">
          <AccordionTrigger>Element Info:</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Element Name:{" "}
              <span className="font-mono text-blue-600 font-semibold">
                {selectedInnerElement.tagName}
              </span>
            </label>
          </AccordionContent>
        </AccordionItem> */}
        <AccordionItem value="item-2" className="bg-white p-2 shadow-sm rounded-md mb-4">
          <AccordionTrigger>Tailwind Classes:</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <TailwindClassWrapper
              initialClasses={classes}
              updateInnerElementProperties={(updatedClasses: string) =>
                updateInnerElementProperties(updatedClasses, innerText)
              }
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="bg-white p-2 shadow-sm rounded-md mb-4">
          <AccordionTrigger>Element's Content:</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <EditorElementContent
              elementText={innerText || ""}
              onSave={(updatedText: string) =>
                updateInnerElementProperties(classes, updatedText)
              }
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="bg-white p-2 shadow-sm rounded-md mb-4">
          <AccordionTrigger>Delete Element:</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <DeleteElement
              componentId={selectedInnerElement.componentId}
              elementId={selectedInnerElement.elementId}
              setSelectedInnerElement={setSelectedInnerElement}
              selectedComponents={selectedComponents}
              setSelectedComponents={setSelectedComponents}
              setLastDeletedElementInfo={setLastDeletedElementInfo}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default InnerElementProperties;
