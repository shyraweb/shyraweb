import { SelectedComponent } from "@/types/editor";
import PublishWebsite from "@/components/Editor/PublishWebsite";
import { Button } from "@/components/ui/button";
import {
  // CodeXml,
  Eye,
  EyeOff,
} from "lucide-react";
// import { generateFullHtml } from "@/utils/GenerateFullHTML";
// import CodeDrawer from "@/components/Drawers/CodeDrawer";
import { useState } from "react";
import PreviewModal from "./PreviewModal";
import DownloadWrapper from "./DownloadWrapper";

export default function CanvasHeader({
  selectedComponents,
}: {
  selectedComponents: SelectedComponent[];
}) {
  // const [openCodeDrawer, setOpenCodeDrawer] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  return (
    <>
      <header className="p-4 flex justify-end items-center bg-white h-[65px]">
        <div className="flex space-x-4">
          {/* <Button
            disabled={selectedComponents.length === 0}
            onClick={() => setOpenCodeDrawer(true)}
            className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-indigo-500 px-10 py-4 border text-left p-3 text-gray-50 font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
          >
            <CodeXml className="h-4 w-4" />
            Edit Code
          </Button> */}
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
      {/* <CodeDrawer
        selectedComponents={selectedComponents}
        open={openCodeDrawer}
        onClose={() => setOpenCodeDrawer(false)}
        htmlContent={generateFullHtml(selectedComponents)}
        finalCode={true}
      /> */}
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
