import { SelectedComponent } from "@/types/editor";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
const PreviewModal = dynamic(() => import("@/components/Editor/Preview/PreviewModal"));
const DownloadWrapper = dynamic(
  () => import("@/components/Editor/DownloadCode/DownloadWrapper")
);
const PublishWebsite = dynamic(
  () => import("@/components/Editor/Publish/PublishWebsite")
);

export default function CanvasHeader({
  selectedComponents,
}: {
  selectedComponents: SelectedComponent[];
}) {
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  return (
    <>
      <header className="p-4 flex justify-end items-center h-[65px] bg-white">
        <div className="flex space-x-4">
          <Button
            disabled={selectedComponents.length === 0}
            onClick={() => setShowPreviewModal(true)}
            className="border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-lg gap-2 px-5 py-2 font-semibold transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {selectedComponents.length === 0 ? <EyeOff /> : <Eye />}
            Preview
          </Button>
          <PublishWebsite selectedComponents={selectedComponents} />
          <DownloadWrapper selectedComponents={selectedComponents} />
        </div>
      </header>
      {showPreviewModal && (
        <PreviewModal
          open={showPreviewModal}
          selectedComponents={selectedComponents}
          onClose={() => setShowPreviewModal(false)}
        />
      )}
    </>
  );
}
