import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/editorStore";
import { toast } from "sonner";

const DialogCancelBtn = dynamic(
  () => import("@/components/SharedComponents/DialogCancelBtn")
);

export default function WebsiteLinkView({ onClose }: { onClose: () => void }) {
  const { publishedURL } = useEditorStore();

  const handleCopyURL = async () => {
    try {
      await navigator.clipboard.writeText(publishedURL[0] ?? "");
      toast.success("Success! Website URL copied to clipboard.");
    } catch (err) {
      console.error("Failed to copy website URL: ", err);
      toast.error("Failed to copy website URL. Please try again manually.");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* GIF as fullscreen background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Celebration.gif"
          alt="Celebration Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Card content */}
      <motion.div
        className="relative z-10 bg-white p-6 rounded-lg shadow-xl w-fit md:min-w-[30rem] flex flex-col gap-1.5 h-fit"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-bold text-black">
          Your website is now live
        </h3>
        <h4 className="text-sm font-semibold text-black mt-4">
          View your website at:
        </h4>
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input
            type="text"
            placeholder="live website link"
            value={publishedURL[0]}
          />
          <Button
            type="submit"
            variant="outline"
            onClick={handleCopyURL}
            className="-ml-[4.8rem] border border-violet-700 rounded text-violet-700 bg-transparent hover:bg-violet-100 focus:outline-none"
          >
            Copy
          </Button>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 mt-6">
          <DialogCancelBtn onClose={onClose} />
          <Link
            href={publishedURL[0] ?? ""}
            target="_blank"
            className="flex w-full md:w-[48%] justify-center items-center rounded border border-violet-700 h-12 px-4 py-2 text-white bg-violet-700 hover:bg-violet-800 focus:outline-none"
          >
            View Website <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
