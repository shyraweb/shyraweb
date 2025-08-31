import { PropertyWrapperProps } from "@/types/editor";
import RestoreElement from "./RestoreElement";
import { useEditorStore } from "@/store/editorStore";
import dynamic from "next/dynamic";

const InnerElementProperties = dynamic(
  () => import("@/components/Editor/Properties/InnerElementProperties")
);
const AIAssistant = dynamic(
  () => import("@/components/Editor/AIAssistant/AIAssistant")
);

export default function PropertiesWrapper({
  handleInnerElementRestore,
  selectedInnerElement,
  setSelectedInnerElement,
  activeComponent,
  selectedComponents,
  setSelectedComponents,
}: PropertyWrapperProps) {

  const { lastDeletedElementInfo } = useEditorStore();

  return (
    <aside className="w-80 px-1 py-4 min-h-screen relative overflow-hidden pt-30 shadow-lg overflow-y-auto custom-scrollbar">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-300" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {(activeComponent ||
          selectedInnerElement ||
          lastDeletedElementInfo) && (
          <h2 className="text-xl font-bold mb-4 text-violet-950">Edit Properties</h2>
        )}
        {lastDeletedElementInfo && (
          <RestoreElement
            tagName={lastDeletedElementInfo.tagName}
            handleInnerElementRestore={handleInnerElementRestore}
          />
        )}

        {selectedInnerElement ? (
          <InnerElementProperties
            selectedInnerElement={selectedInnerElement}
            setSelectedInnerElement={setSelectedInnerElement}
            selectedComponents={selectedComponents}
            setSelectedComponents={setSelectedComponents}
          />
        ) : activeComponent ? null : (
          <div className="mt-6 p-4 bg-white/10 flex flex-col gap-2 backdrop-blur-sm border border-indigo-500/20 rounded-2xl overflow-hidden">
            <h2 className="text-lg font-bold text-violet-700 mb-3">
              Edit Properties
            </h2>
            <p className="text-neutral-600 text-sm">
              Select a component or an element on the canvas to edit its
              properties.
            </p>
          </div>
        )}
        
        {/* AI Assistant Section */}
        {(activeComponent || selectedInnerElement) && (
          <AIAssistant
            activeComponent={activeComponent}
            selectedInnerElement={selectedInnerElement}
            selectedComponents={selectedComponents}
            setSelectedComponents={setSelectedComponents}
          />
        )}
      </div>
    </aside>
  );
}
