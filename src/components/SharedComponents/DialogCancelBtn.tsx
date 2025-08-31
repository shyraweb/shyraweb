import { Button } from "@/components/ui/button";

export default function DialogCancelBtn({ onClose }: { onClose: () => void }) {
  return (
    <Button
      onClick={onClose}
      variant="outline"
      className="flex w-full md:w-[48%] items-center border border-violet-700 h-12 rounded text-violet-700 bg-transparent hover:bg-violet-100 focus:outline-none"
    >
      Cancel
    </Button>
  );
}
