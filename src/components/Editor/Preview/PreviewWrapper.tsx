import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SelectedComponent } from "@/types/editor";
import dynamic from "next/dynamic";

const PreviewModal = dynamic(
  () => import("@/components/Editor/Preview/PreviewModal")
);

export default function PreviewWrapper({
  selectedComponents,
}: {
  selectedComponents: SelectedComponent[];
}) {
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);
  const handlePreview = () => {
    setShowPreviewModal(!showPreviewModal);
  };
  return (
    <>
      <button
        onClick={handlePreview}
        className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-md font-semibold transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Preview
      </button>
      <AnimatePresence>
        {showPreviewModal && (
          <PreviewModal
            open={showPreviewModal}
            selectedComponents={selectedComponents}
            onClose={handlePreview}
          />
        )}
      </AnimatePresence>
    </>
  );
}
