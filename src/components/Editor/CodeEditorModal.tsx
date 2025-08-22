// Code Editor Modal Component
import { useState, useEffect, FC } from "react";
import { motion } from "framer-motion";
import { CodeEditorModalProps } from "@/types/editor";
import Editor from "@monaco-editor/react";

const CodeEditorModal: FC<CodeEditorModalProps> = ({
  htmlContent,
  onSave,
  onClose,
  componentName,
}) => {
  const [editedHtml, setEditedHtml] = useState<string>(htmlContent);

  useEffect(() => {
    setEditedHtml(htmlContent);
  }, [htmlContent]);

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-3xl flex flex-col h-[80vh]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-teal-300">
          Edit {componentName} Code
        </h3>
        <Editor
          height="80vh"
          theme="vs-dark"
          path="index.html"
          defaultLanguage="html"
          defaultValue={editedHtml}
          onChange={(value: string | undefined) => setEditedHtml(value ?? "")}
        />
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Close
          </button>
          <button
            onClick={() => onSave(editedHtml)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Save Changes
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CodeEditorModal;
