import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CodeEditConfirmModal({
  onClose,
  handleSubmit,
}: {
  onClose: () => void;
  handleSubmit: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-xl w-fit max-w-[30rem] flex flex-col gap-6 h-fit"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-black">Discard Changes</h3>
        <p className="text-gray-600">
          You have made changes that haven't been saved yet. Are you sure to
          discard changes ?
        </p>
        <div className="flex items-center justify-between gap-4">
          <Button
            onClick={onClose}
            className="flex w-[48%] items-center rounded border border-violet-700 h-12 px-4 py-2 text-white bg-violet-700 hover:bg-violet-800 focus:outline-none dark:text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="outline"
            className="flex w-[48%] items-center border border-violet-700 h-12 rounded text-violet-700 bg-transparent hover:bg-violet-100 focus:outline-none"
          >
            Yes
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
