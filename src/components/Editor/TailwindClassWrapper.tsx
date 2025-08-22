import { useEffect, useRef, useState, ChangeEvent, KeyboardEvent } from "react";
import PropertyInput from "@/components/Editor/PropertyInput";
import { TAILWIND_CLASSES } from "@/constants/tailwindClasses";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";


export default function TailwindClassWrapper({
  updateInnerElementProperties,
  initialClasses,
}: {
  updateInnerElementProperties: (updatedClasses: string) => void;
  initialClasses: string;
}) {
  const [currentClasses, setCurrentClasses] = useState<string>(
    initialClasses || ""
  );
  const [classInput, setClassInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const suggestionRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setCurrentClasses(initialClasses || "");
    setClassInput("");
    setSuggestions([]);
    setShowSuggestions(false);
  }, [initialClasses]);

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [suggestionRef]);

  const handleClassInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setClassInput(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      if (value.trim() === "") {
        setSuggestions([]);
        setShowSuggestions(false);
      } else {
        const currentClassArray = currentClasses
          .split(" ")
          .filter((c) => c.trim() !== "");
        const filtered = TAILWIND_CLASSES.filter(
          (cls) =>
            cls.includes(value.toLowerCase()) &&
            !currentClassArray.includes(cls)
        ).slice(0, 10);
        setSuggestions(filtered);
        setShowSuggestions(true);
      }
    }, 300);
  };

  const handleAddClass = (clsToAdd: string) => {
    const newClassesArray = [
      ...currentClasses.split(" ").filter((c) => c.trim() !== ""),
      clsToAdd,
    ];
    const newClassesString = newClassesArray.join(" ");
    setCurrentClasses(newClassesString);
    setClassInput("");
    setSuggestions([]);
    setShowSuggestions(false);
    updateInnerElementProperties(newClassesString);
  };

  const handleRemoveClass = (classToRemove: string) => {
    const newClassesArray = currentClasses
      .split(" ")
      .filter((c) => c.trim() !== "" && c !== classToRemove);
    const newClassesString = newClassesArray.join(" ");
    setCurrentClasses(newClassesString);
    updateInnerElementProperties(newClassesString);
  };

  return (
    <>
      <div className="relative">
        <PropertyInput
          label=""
          name="classes"
          value={classInput}
          onChange={handleClassInputChange}
          onFocus={() => {
            if (suggestions.length > 0) setShowSuggestions(true);
          }}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter" && suggestions.length > 0) {
              e.preventDefault();
              handleAddClass(suggestions[0]);
            }
          }}
          type="text"
          placeholder="Add Tailwind classes..."
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul
            ref={suggestionRef}
            className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-48 overflow-y-auto custom-scrollbar"
          >
            {suggestions.map((cls) => (
              <li
                key={cls}
                className="p-2 text-gray-800 hover:bg-blue-100 cursor-pointer"
                onClick={() => handleAddClass(cls)}
              >
                {cls}
              </li>
            ))}
          </ul>
        )}
      </div>

      {currentClasses && (
        <div className="flex flex-wrap gap-2 mt-2">
          {currentClasses
            .split(" ")
            .filter((c) => c.trim() !== "")
            .map((cls, index) => (
              <div
                key={index}
                className="group relative bg-blue-100 text-blue-600 pl-3 pr-1 rounded-full text-sm flex items-center"
              >
                {cls}
                <Button
                  onClick={() => handleRemoveClass(cls)}
                  className="ml-[-0.5rem] mr-[-0.75rem] text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  title="Remove class"
                >
                  <X />
                </Button>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
