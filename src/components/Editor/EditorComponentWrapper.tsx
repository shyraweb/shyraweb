import React, { useRef, useEffect, useCallback, useState } from "react";
import { EditorComponentWrapperProps } from "@/types/editor";
import { X, ArrowUp, ArrowDown, CodeXml, Trash } from "lucide-react";
import CodeDrawer from "@/components/Drawers/CodeDrawer";

const EditorComponentWrapper: React.FC<EditorComponentWrapperProps> = ({
  id,
  onRemove,
  onSelect,
  isActive,
  onMove,
  isFirst,
  isLast,
  htmlContent,
  onSave,
  onInnerElementSelect,
  selectedInnerElementId,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const currentHoveredElement = useRef<HTMLElement | null>(null);
  const [openCodeDrawer, setOpenCodeDrawer] = useState(false);

  const clearAllStyles = useCallback(() => {
    if (wrapperRef.current) {
      const allElements =
        wrapperRef.current.querySelectorAll("[data-element-id]");
      allElements.forEach((el) => {
        (el as HTMLElement).style.outline = "";
        (el as HTMLElement).style.border = "";
      });
    }
  }, []);

  useEffect(() => {
    clearAllStyles();

    if (isActive && selectedInnerElementId && wrapperRef.current) {
      const selectedEl = wrapperRef.current.querySelector(
        `[data-element-id="${selectedInnerElementId}"]`
      ) as HTMLElement;
      if (selectedEl) {
        selectedEl.style.border = "2px solid green";
      }
    }

    if (
      currentHoveredElement.current &&
      currentHoveredElement.current.getAttribute("data-element-id") !==
        selectedInnerElementId
    ) {
      currentHoveredElement.current.style.outline = "2px dotted blue";
    }
  }, [isActive, selectedInnerElementId, clearAllStyles]);

  useEffect(() => {
    const win = window as any;
    if (win.tailwind && typeof win.tailwind.config !== "undefined") {
      win.tailwind.config = win.tailwind.config;
    }
  }, [htmlContent]);

  const handleDelegatedMouseOver = useCallback(
    (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "[data-element-id]"
      ) as HTMLElement;
      if (
        target &&
        wrapperRef.current &&
        wrapperRef.current.contains(target) &&
        target.getAttribute("data-element-id") !== selectedInnerElementId
      ) {
        target.style.outline = "2px dotted blue";
        currentHoveredElement.current = target;
      }
    },
    [selectedInnerElementId]
  );

  const handleDelegatedMouseOut = useCallback(
    (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "[data-element-id]"
      ) as HTMLElement;
      if (
        target &&
        wrapperRef.current &&
        wrapperRef.current.contains(target) &&
        target.getAttribute("data-element-id") !== selectedInnerElementId
      ) {
        target.style.outline = "";
        currentHoveredElement.current = null;
      }
    },
    [selectedInnerElementId]
  );

  const handleInnerElementClick = useCallback(
    (e: MouseEvent) => {
      const isInToolbar = (e.target as HTMLElement).closest(".editor-toolbar");
      if (isInToolbar) return;

      const target = (e.target as HTMLElement).closest(
        "[data-element-id]"
      ) as HTMLElement;

      if (target && wrapperRef.current && wrapperRef.current.contains(target)) {
        clearAllStyles();
        target.style.border = "2px solid green";
        onInnerElementSelect(
          id,
          target.getAttribute("data-element-id") || "",
          target.className,
          target.tagName.toLowerCase()
        );
      }
    },
    [id, onInnerElementSelect, clearAllStyles]
  );

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    if (!wrapperElement) return;

    wrapperElement.addEventListener("mouseover", handleDelegatedMouseOver);
    wrapperElement.addEventListener("mouseout", handleDelegatedMouseOut);
    wrapperElement.addEventListener("click", handleInnerElementClick);

    return () => {
      wrapperElement.removeEventListener("mouseover", handleDelegatedMouseOver);
      wrapperElement.removeEventListener("mouseout", handleDelegatedMouseOut);
      wrapperElement.removeEventListener("click", handleInnerElementClick);
      clearAllStyles();
    };
  }, [
    handleDelegatedMouseOver,
    handleDelegatedMouseOut,
    handleInnerElementClick,
    clearAllStyles,
  ]);

  return (
    <>
      <div
        ref={wrapperRef}
        className={`relative p-4 border-2 rounded-md transition-all duration-200 group ${
          isActive
            ? "border-blue-500 shadow-lg"
            : "border-gray-200 hover:border-gray-400"
        }`}
        onClick={() =>
          onSelect({
            id,
            type: "",
            name: "",
            _id: "",
            props: {},
            htmlContent: "",
          })
        }
      >
        {/* <iframe
          ref={iframeRef}
          className="w-full h-[600px] border rounded-xl"
          sandbox="allow-same-origin allow-scripts"
        /> */}
        {/* <div className="flex flex-col gap-4 p-4">
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        // className="w-full"
      />
    </div> */}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

        {/* Toolbar Buttons */}
        {isActive && (
          <div className="editor-toolbar absolute top-2 right-2 flex space-x-2 z-50 pointer-events-auto p-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenCodeDrawer(true);
              }}
              className="bg-purple-600 text-white p-1 rounded-full text-xs hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
              title="Edit Code"
            >
              <CodeXml className="h-4 w-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onMove(id, "up");
              }}
              disabled={isFirst}
              className={`bg-gray-600 text-white p-1 rounded-full text-xs hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                isFirst ? "opacity-50 cursor-not-allowed" : ""
              }`}
              title="Move Up"
            >
              <ArrowUp className="h-4 w-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onMove(id, "down");
              }}
              disabled={isLast}
              className={`bg-gray-600 text-white p-1 rounded-full text-xs hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                isLast ? "opacity-50 cursor-not-allowed" : ""
              }`}
              title="Move Down"
            >
              <ArrowDown className="h-4 w-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(id);
              }}
              className="bg-red-500 text-white p-1 rounded-full text-xs hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              title="Delete Component"
            >
              <Trash className="h-3 w-4" />
            </button>
          </div>
        )}
      </div>
      <CodeDrawer
        open={openCodeDrawer}
        onClose={() => setOpenCodeDrawer(false)}
        htmlContent={htmlContent}
        id={id}
        onSave={onSave}
      />
    </>
  );
};

export default EditorComponentWrapper;
