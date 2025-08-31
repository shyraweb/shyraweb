import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useEditorStore } from "@/store/editorStore";
import { Globe } from "lucide-react";

export default function PublishedURLs() {
  const { publishedURL } = useEditorStore();

  const handleSelection = async (selectedOption: string) => {
    try {
      window.open(selectedOption, "_blank");
    } catch (error) {
      console.error("Error during project download:", error);
    }
  };

  return (
    <Select onValueChange={handleSelection}>
      <SelectTrigger
        aria-label="Publish"
        title="Published URLs"
        className="w-fit border-2 border-[#ed4b9b] bg-white text-[#ed4b9b] font-semibold transition-colors duration-200 shadow-sm"
      >
        <Globe className="size-4 text-[#ed4b9b]" />
        <span className="hidden xl:block">Published URLs</span>
      </SelectTrigger>
      <SelectContent className="p-2">
        {publishedURL.map((item, index) => (
          <SelectItem
            className="cursor-pointer"
            value={item}
            key={item + index}
          >
            <div className="flex flex-col">
              <span className="font-semibold w-full text-[13px]">
                Website Link {index + 1}
              </span>
              <span className="text-muted-foreground w-full text-[13px]">
                {item}
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
