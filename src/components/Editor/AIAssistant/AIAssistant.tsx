import React, { useState } from "react";
import { SelectedComponent, SelectedInnerElement } from "@/types/editor";
import { toast } from "sonner";
import { AI_ASSISTANT_MESSAGES } from "@/constants/ToastMessages";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const AILoader = dynamic(
  () => import("@/components/Editor/AIAssistant/AILoader")
);

export default function AIAssistant({
  activeComponent,
  selectedInnerElement,
  selectedComponents,
  setSelectedComponents,
}: {
  activeComponent: SelectedComponent | null;
  selectedInnerElement: SelectedInnerElement | null;
  selectedComponents: SelectedComponent[];
  setSelectedComponents: React.Dispatch<
    React.SetStateAction<SelectedComponent[]>
  >;
}) {
  // AI Integration States
  const [aiPrompt, setAiPrompt] = useState<string>("");
  const [isAiGenerating, setIsAiGenerating] = useState<boolean>(false);

  const handleAiGenerate = async () => {
    if (isAiGenerating) return;

    if (!activeComponent && !selectedInnerElement) {
      toast.error(AI_ASSISTANT_MESSAGES.noSelection);
      return;
    }

    if (!aiPrompt.trim()) {
      toast.error(AI_ASSISTANT_MESSAGES.emptyPrompt);
      return;
    }

    setIsAiGenerating(true);

    let currentHtmlToModify = "";
    let targetComponentId = "";
    let targetElementId: string | null = null;

    if (selectedInnerElement) {
      targetComponentId = selectedInnerElement.componentId;
      targetElementId = selectedInnerElement.elementId;

      const componentHtml = selectedComponents.find(
        (comp) => comp.id === targetComponentId
      )?.htmlContent;

      if (componentHtml) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(componentHtml, "text/html");
        const element = doc.querySelector(
          `[data-element-id="${targetElementId}"]`
        );
        if (element) {
          currentHtmlToModify = element.outerHTML;
        }
      }
    } else if (activeComponent) {
      targetComponentId = activeComponent.id;
      currentHtmlToModify = activeComponent.htmlContent;
    }

    if (!currentHtmlToModify) {
      toast.error(AI_ASSISTANT_MESSAGES.emptyHTMLCode);
      setIsAiGenerating(false);
      return;
    }

    const fullPrompt = `Modify the following HTML based on the user's request. Only return the modified HTML, no extra text or markdown. Preserve all existing 'data-element-id' attributes and assign unique ones to new elements. Use Tailwind CSS for styling.
User request: ${aiPrompt}

HTML to modify:
${currentHtmlToModify}`;

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        body: JSON.stringify({
          projectDescription: fullPrompt,
          groqApiKey: "", // optional
          modal: "", // optional: e.g., llama3-70b
        }),
      });

      if (!response.body) throw new Error("No response stream received");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let newHtml = "";
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        newHtml += decoder.decode(value || new Uint8Array(), { stream: true });
      }

      newHtml = newHtml
        .replace(/^```html\n?/, "")
        .replace(/\n?```$/, "")
        .trim();

      // Parse and assign new unique IDs
      const parser = new DOMParser();
      const tempDoc = parser.parseFromString(newHtml, "text/html");

      let currentMaxId = 0;
      selectedComponents.forEach((comp) => {
        const compDoc = parser.parseFromString(comp.htmlContent, "text/html");
        compDoc.querySelectorAll("[data-element-id]").forEach((el) => {
          const idNum = parseInt(
            el.getAttribute("data-element-id")?.replace("el-", "") || "0"
          );
          if (idNum > currentMaxId) currentMaxId = idNum;
        });
      });

      const traverseAndAssignNewIds = (node: Node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as HTMLElement;
          if (!element.hasAttribute("data-element-id")) {
            element.setAttribute("data-element-id", `el-${++currentMaxId}`);
          }
          for (const child of Array.from(element.children)) {
            traverseAndAssignNewIds(child);
          }
        }
      };
      traverseAndAssignNewIds(tempDoc.body);

      newHtml = tempDoc.body.innerHTML;

      setSelectedComponents((prevComponents) =>
        prevComponents.map((comp) => {
          if (comp.id === targetComponentId) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(comp.htmlContent, "text/html");

            if (targetElementId) {
              const elementToReplace = doc.querySelector(
                `[data-element-id="${targetElementId}"]`
              );
              const replacement = tempDoc.querySelector(
                `[data-element-id="${targetElementId}"]`
              );

              if (elementToReplace && replacement) {
                const clonedReplacement = replacement.cloneNode(true);
                elementToReplace.replaceWith(clonedReplacement as Node);
              }
              return { ...comp, htmlContent: doc.body.innerHTML };
            } else {
              return { ...comp, htmlContent: newHtml };
            }
          }
          return comp;
        })
      );

      setAiPrompt("");
    } catch (error) {
      toast.error(AI_ASSISTANT_MESSAGES.aiErrorWithPrompt);
      console.error("AI generation error:", error);
    } finally {
      setIsAiGenerating(false);
    }
  };

  return (
    <div className="mt-6 p-4 bg-white/10 flex flex-col gap-2 backdrop-blur-sm border border-indigo-500/20 rounded-2xl overflow-hidden">
      <h2 className="text-lg font-bold text-violet-700">AI Assistant</h2>
      <p className="text-neutral-600 text-[12px] mb-2">
        Describe how you want to modify the selected element/component&apos;s UI:
      </p>
      <textarea
        className="w-full p-2 text-[13px] border border-blue-300 rounded-md shadow-sm text-gray-800 resize-y min-h-32 max-h-56 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Describe your changes here..."
        value={aiPrompt}
        onChange={(e) => setAiPrompt(e.target.value)}
        disabled={isAiGenerating}
      />
      <Button
        onClick={handleAiGenerate}
        className="py-5 bg-transparent border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-lg gap-2 w-full disabled:cursor-not-allowed cursor-pointer"
      >
        {isAiGenerating ? (
          <span className="flex items-center justify-center">
            <AILoader />
            Generating
          </span>
        ) : (
          "Apply AI Changes"
        )}
      </Button>
    </div>
  );
}
