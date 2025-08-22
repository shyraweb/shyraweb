import React, { useState } from "react";
import { generateFullHtml } from "@/utils/GenerateFullHTML";
import { SelectedComponent } from "@/types/editor";
import { Globe } from "lucide-react";
import { useEditorStore } from "@/store/editorStore";

export default function PublishWebsite({
  selectedComponents,
}: {
  selectedComponents: SelectedComponent[];
}) {
  const { setPublishedURL } = useEditorStore();
  const [loading, setLoading] = useState(false);

  const deployToGithubPages = async () => {
    setLoading(true);
    const html = generateFullHtml(selectedComponents);
    const repoName = `new-repo`;

    const res = await fetch("/api/deploy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ repoName, htmlContent: html }),
    });

    const data = await res.json();
    if (res.ok) {
      setPublishedURL(data.url);
    } else {
      console.error(data.error);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={deployToGithubPages}
      disabled={loading}
      className="btnBg px-5 flex gap-1 items-center py-2 rounded-md font-semibold transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2"
    >
      <Globe className="size-4" />
      {loading ? "Publishing..." : "Publish"}
    </button>
  );
}
