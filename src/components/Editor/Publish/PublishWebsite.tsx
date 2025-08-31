import { useState } from "react";
import { generateFullHtml } from "@/utils/GenerateFullHTML";
import { SelectedComponent } from "@/types/editor";
import { Rocket } from "lucide-react";
import { useEditorStore } from "@/store/editorStore";
import { AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import dynamic from "next/dynamic";

const DeploymentDetails = dynamic(
  () => import("@/components/Editor/Publish/DeploymentDetails")
);
const DeploymentProgressBar = dynamic(
  () => import("@/components/Editor/Publish/DeploymentProgressBar")
);
const WebsiteLinkView = dynamic(
  () => import("@/components/Editor/Publish/WebsiteLinkView")
);
const PublishedURLs = dynamic(
  () => import("@/components/Editor/Publish/PublishedURLs")
);

const baseURL =
  process.env.DEPLOYED_WEBSITE_BASE_URL || "https://shyraweb.github.io/";

export default function PublishWebsite({
  selectedComponents,
}: {
  selectedComponents: SelectedComponent[];
}) {
  const { publishedURL, setPublishedURL } = useEditorStore();
  const [loading, setLoading] = useState(false);
  const [showHideConfirm, setShowHideConfirm] = useState<boolean>(false);
  const [progressConfirm, setProgressConfirm] = useState<boolean>(false);
  const [successURLDialog, setSuccessURLDialog] = useState<boolean>(false);

  const publishWebsite = () => {
    if (selectedComponents.length === 0) {
      setShowHideConfirm(false);
      toast.info("Publish your website", {
        description: "Please add some components to publish your website.",
        position: "bottom-center",
      });
      return;
    }
    setShowHideConfirm(true);
  };

  const deployToGithubPages = async (
    finalRepoName?: string,
    title?: string
  ) => {
    setProgressConfirm(true);
    setShowHideConfirm(false);
    setLoading(true);
    const html = generateFullHtml(selectedComponents, title);
    const repoName = finalRepoName ?? `new-repo-${Date.now()}`;
    const res = await fetch("/api/deploy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ repoName, htmlContent: html }),
    });
    const data = await res.json();
    if (res.ok) {
      setPublishedURL(data.url);
      setSuccessURLDialog(true);
    } else {
      setProgressConfirm(false);
      if (data.error.status === "422") {
        toast.error("Deployment failed", {
          description: `URL: ${
            baseURL + repoName
          } is already deployed. Please try other URL.`,
          position: "bottom-center",
        });
      } else {
        toast.error("Deployment failed", {
          description:
            data.error.message || "An error occurred during deployment.",
          position: "bottom-center",
        });
      }
    }
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={publishWebsite}
        disabled={loading}
        className="btnBg px-5 flex gap-2 items-center py-2 rounded-md font-semibold transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2"
      >
        <Rocket className="size-4" />
        {loading ? "Publishing..." : "Publish Website"}
      </button>
      {publishedURL.length ? <PublishedURLs /> : null}
      <AnimatePresence>
        {showHideConfirm && (
          <DeploymentDetails
            onClose={() => setShowHideConfirm(false)}
            handleSubmit={deployToGithubPages}
            baseURL={baseURL}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {progressConfirm && (
          <DeploymentProgressBar onClose={() => setProgressConfirm(false)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {successURLDialog && !progressConfirm && (
          <WebsiteLinkView onClose={() => setSuccessURLDialog(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
