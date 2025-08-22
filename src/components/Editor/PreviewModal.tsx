import { useMemo, useState } from "react";
import { PreviewModalProps, ActiveResponsivenessTypes } from "@/types/editor";
import { generateFullHtml } from "@/utils/GenerateFullHTML";
import DownloadWrapper from "@/components/Editor/DownloadWrapper";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { X } from "lucide-react";
import { ScreenSizeToggle } from "./ScreenSizeWrapper";
import { SCREEN_SIZE_TABS } from "@/constants/ScreenSizeTabsList";
import { PREVIEW_CODE_TABS } from "@/constants/PreviewCodeTabs";

const PreviewModal: React.FC<PreviewModalProps> = ({
  open,
  selectedComponents,
  onClose,
}) => {
  const [sizeSelected, setSizeSelected] = useState<ActiveResponsivenessTypes>(
    SCREEN_SIZE_TABS[0]
  );
  const [activeTab, setActiveTab] = useState(PREVIEW_CODE_TABS[0].value);

  const getHTMLCode = useMemo(() => {
    return generateFullHtml(selectedComponents);
  }, [selectedComponents]);

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(getHTMLCode);
      toast.success("Success! HTML code copied to clipboard.");
    } catch (err) {
      console.error("Failed to copy HTML code: ", err);
      toast.error("Failed to copy HTML code. Please try again manually.");
    }
  };

  const handleSizeSelection = (state: ActiveResponsivenessTypes) => {
    setSizeSelected(state);
  };

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerTrigger asChild></DrawerTrigger>
      <DrawerContent className="w-full min-h-full">
        <DrawerHeader className="p-0 -mt-3 mb-3">
          <div className="flex justify-between items-center px-4 ">
            <div className="flex gap-2 border rounded-md w-fit border-[#8B5CF6]">
              {PREVIEW_CODE_TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex gap-2 text-[14px] p-3 items-center text-center text-sm font-semibold ${
                    activeTab === tab.value
                      ? "gradientBg text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } ${tab.id === 1 ? "rounded-l-md" : "rounded-r-md"}`}
                  onClick={() => setActiveTab(tab.value)}
                >
                  {<tab.icon className="size-4" />}
                  <span className="hidden lg:block">{tab.label}</span>
                </button>
              ))}
            </div>
            <ScreenSizeToggle
              sizeSelected={sizeSelected}
              handleSizeSelection={handleSizeSelection}
            />
            <div className="flex items-center space-x-3">
              <DownloadWrapper selectedComponents={selectedComponents} />
              <DrawerClose asChild>
                <Button
                  className="text-gray-500 hover:text-gray-700 hover:bg-indigo-100 hover:shadow-2xl rounded-full p-1"
                  title="Close Preview"
                >
                  <X className="h-6 w-5" />
                </Button>
              </DrawerClose>
            </div>
          </div>
        </DrawerHeader>
        {PREVIEW_CODE_TABS[0].value === activeTab ? (
          <div
            className={`flex-1 bg-gray-100 text-gray-800 custom-scrollbar ${
              sizeSelected.id !== 1 && "m-auto"
            }`}
          >
            <iframe
              className="h-[90vh]"
              sandbox="allow-same-origin allow-scripts"
              srcDoc={generateFullHtml(selectedComponents)}
              width={sizeSelected.width}
            />
          </div>
        ) : (
          <div className="flex-1 p-4 bg-gray-800 text-gray-200 font-mono text-sm overflow-y-auto custom-scrollbar relative">
            <Button
              onClick={handleCopyHtml}
              className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              title="Copy HTML to clipboard"
            >
              Copy Code
            </Button>
            <pre className="whitespace-pre-wrap break-words pr-16">
              {getHTMLCode}
            </pre>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default PreviewModal;
