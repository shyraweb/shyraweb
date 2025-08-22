import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import PropertyInput from "./PropertyInput";

export default function EditorElementContent({
  elementText,
  onSave,
}: {
  elementText: string;
  onSave: (updatedText: string) => void;
}) {
  const [stagedInnerText, setStagedInnerText] = useState<string>(elementText);

  useEffect(() => {
    setStagedInnerText(elementText);
  }, [elementText]);

  return (
    <>
      <PropertyInput
        label=""
        name="innerText"
        value={stagedInnerText}
        onChange={(e) => setStagedInnerText(e.target.value)}
        type="textarea"
      />
      <Button
        onClick={() => onSave(stagedInnerText)}
        disabled={stagedInnerText === elementText}
        className="mt-2 w-full relative bg-white isolation-auto z-10 border-purple-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-purple-700 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm text-purple-700 border shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
      >
        Save Content
      </Button>
    </>
  );
}
