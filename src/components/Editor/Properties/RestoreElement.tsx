import { Button } from "@/components/ui/button";

export default function RestoreElement({
  tagName,
  handleInnerElementRestore,
}: {
  tagName: string;
  handleInnerElementRestore: () => void;
}) {
  return (
    <div className="mb-4 p-2 bg-gray-50 rounded-md border border-gray-200">
      <p className="text-sm text-gray-600 mb-2">
        Last deleted: <span className="font-bold">{tagName.toUpperCase()}</span>{" "}
      </p>
      <p className="text-xs text-gray-500 mb-3">
        You can restore the most recently deleted element back to your project
        by clicking the button below.
      </p>
      <Button
        onClick={handleInnerElementRestore}
        className="w-full bg-violet-700 hover:bg-violet-800 text-white text-[13px]"
      >
        Restore Last Deleted Element
      </Button>
    </div>
  );
}
