import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";

const DialogCancelBtn = dynamic(
  () => import("@/components/SharedComponents/DialogCancelBtn")
);

export default function DeploymentDetails({
  baseURL,
  onClose,
  handleSubmit,
}: {
  baseURL: string;
  onClose: () => void;
  handleSubmit: (finalRepoName?: string, title?: string) => void;
}) {
  const [websiteTitle, setWebsiteTitle] = useState("Website Preview");
  const [websiteURL, setWebsiteURL] = useState("");

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-xl w-fit max-w-[30rem] flex flex-col gap-1.5 h-fit"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-bold text-black">Website Details</h3>
        <p className="text-gray-600 text-[12px]">
          You can change the title and URL of your website before deployment.
        </p>
        <h4 className="text-sm font-semibold text-black mt-4">
          Website Title:
        </h4>
        <Input
          type="text"
          placeholder="Website Preview"
          onChange={(e) => setWebsiteTitle(e.target.value)}
          value={websiteTitle}
        />
        <h4 className="text-sm font-semibold text-black mt-4">
          Site address (URL):
        </h4>
        <span className="text-[12px] mb-2">{`${baseURL}${websiteURL
          .toLowerCase()
          .replaceAll(" ", "-")}`}</span>
        <Input
          type="text"
          placeholder={`demo-website-${Date.now()}`}
          onChange={(e) => setWebsiteURL(e.target.value)}
          value={websiteURL.toLowerCase()}
        />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 mt-6">
          <DialogCancelBtn onClose={onClose} />
          <Button
            onClick={() =>
              handleSubmit(
                websiteURL.toLowerCase().replaceAll(" ", "-"),
                websiteTitle
              )
            }
            className="flex  w-full md:w-[48%] items-center rounded border border-violet-700 h-12 px-4 py-2 text-white bg-violet-700 hover:bg-violet-800 focus:outline-none dark:text-white"
          >
            Submit
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
