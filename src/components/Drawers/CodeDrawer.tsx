import { useEffect, useState } from "react";
import { SelectedComponent } from "@/types/editor";
import DownloadWrapper from "@/components/Editor/DownloadWrapper";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";
import Editor from "@monaco-editor/react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { DRAWER_MESSAGES } from "@/constants/ToastMessages";
import { CodeEditConfirmModal } from "./CodeEditConfirmModal";
import { AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CodeDrawer({
  open,
  onClose,
  htmlContent,
  id,
  onSave,
  finalCode = false,
  selectedComponents,
}: {
  open: boolean;
  onClose: () => void;
  htmlContent: string;
  id?: string;
  onSave?: (id: string, html: string) => void;
  finalCode?: boolean;
  selectedComponents?: SelectedComponent[];
}) {
  const [editedHtml, setEditedHtml] = useState<string>(htmlContent);
  const [showHideConfirm, setShowHideConfirm] = useState<boolean>(false);

  useEffect(() => {
    setEditedHtml(htmlContent);
  }, [open, htmlContent]);

  const handleClose = () => {
    if (!editedHtml.trim()) {
      toast.error(DRAWER_MESSAGES.emptyHTML);
      return;
    }
    if (editedHtml !== htmlContent) {
      setShowHideConfirm(true);
      return;
    }
    onClose();
  };

  const handleAllClose = () => {
    setShowHideConfirm(false);
    setEditedHtml("");
    onClose();
  };

  const handleSave = () => {
    if (editedHtml.trim() === "") {
      toast.error(DRAWER_MESSAGES.emptyHTML);
      return;
    }
    if (onSave && id) {
      onSave(id, editedHtml);
    }
    onClose();
  };

  return (
    <>
      <Drawer open={open} onOpenChange={handleClose}>
        <DrawerContent className="w-full min-h-full">
          <DrawerHeader className="pt-0 mt-[-12px] pb-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Edit HTML Code
              </h3>
              <div className="flex items-center">
                {finalCode && selectedComponents ? (
                  <DownloadWrapper selectedComponents={selectedComponents} />
                ) : editedHtml !== htmlContent ? (
                  <Button
                    disabled={!editedHtml.trim() || editedHtml === htmlContent}
                    onClick={handleSave}
                    className="btnBg"
                  >
                    Save Code
                  </Button>
                ) : null}
                <DrawerClose asChild className="ml-4">
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
          <Editor
            height="92vh"
            theme="vs-dark"
            path="index.html"
            defaultValue={editedHtml}
            onChange={(value: string | undefined) => setEditedHtml(value ?? "")}
          />
        </DrawerContent>
      </Drawer>
      <AnimatePresence>
        {showHideConfirm && (
          <CodeEditConfirmModal
            onClose={() => setShowHideConfirm(false)}
            handleSubmit={() => handleAllClose()}
          />
        )}
      </AnimatePresence>
    </>
  );
}
