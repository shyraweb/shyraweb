import { useState } from "react";
import { PROJECT_NAMES } from "@/constants/ProjectNames";
import { getNextJsTailwindZip } from "@/utils/NextJsTailwindZip";
import { getReactJsTailwindZip } from "@/utils/ReactJsTailwindZip";
import { generateFullHtml } from "@/utils/GenerateFullHTML";
import { SelectedComponent } from "@/types/editor";
import { DOWNLOAD_TYPES, DOWNLOAD_DETAILS } from "@/constants/DownloadDetails";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Download } from "lucide-react";
import { toast } from "sonner";

export default function DownloadWrapper({
  selectedComponents,
}: {
  selectedComponents: SelectedComponent[];
}) {
  const [downloading, setDownloading] = useState<boolean>(false);

  const downloadFile = (
    filename: string,
    content: string | Blob,
    mimeType: string
  ) => {
    const blob =
      content instanceof Blob
        ? content
        : new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadSelection = async (selectedOption: string) => {
    if (selectedComponents.length === 0) {
      toast.info("Download code", {
        description: "Please add some components to download code.",
        position: "bottom-center",
      });
      return;
    }
    if (selectedOption === "") return;

    setDownloading(true);
    const appHtmlContent = selectedComponents
      .map((comp) => comp.htmlContent)
      .join("\n");

    try {
      switch (selectedOption) {
        case DOWNLOAD_TYPES.htmlTailwind: {
          const fullHtml = generateFullHtml(selectedComponents);
          downloadFile("index.html", fullHtml, "text/html");
          break;
        }

        case DOWNLOAD_TYPES.reactTailwind: {
          const blob = await getReactJsTailwindZip(appHtmlContent);
          downloadFile(
            `${PROJECT_NAMES.ReactTailwindProjectName}.zip`,
            blob,
            "application/zip"
          );
          break;
        }

        case DOWNLOAD_TYPES.nextjsTailwind: {
          const blob = await getNextJsTailwindZip(appHtmlContent);
          downloadFile(
            `${PROJECT_NAMES.NextTailwindProjectName}.zip`,
            blob,
            "application/zip"
          );
          break;
        }
      }
    } catch (error) {
      console.error("Error during project download:", error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Select onValueChange={handleDownloadSelection}>
      <SelectTrigger
        aria-label="Download"
        title="Download code"
        className="w-fit border-2 border-white bg-blue-500 text-white font-semibold transition-colors duration-200 shadow-sm"
      >
        <Download className="w-5 h-5 animate-bounce text-white" />{" "}
        <span className="hidden lg:block text-[12px]">
          {downloading ? "Downloading..." : "Code"}
        </span>
      </SelectTrigger>
      <SelectContent className="p-2">
        {DOWNLOAD_DETAILS.map((item) => (
          <SelectItem
            className="cursor-pointer"
            value={item.value}
            key={item.value}
          >
            <div className="flex flex-col">
              <span className="font-semibold w-full text-[13px]">{item.title}</span>
              <span className="text-muted-foreground w-full text-[13px]">
                {item.content}
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
