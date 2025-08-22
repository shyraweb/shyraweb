"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { COMPONENTS_CATEGORY } from "@/constants/ComponentsCategory";

export function AddComponent() {
  const [category, setCategory] = useState("");
  const [html, setHtml] = useState("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [isThumbnailValid, setIsThumbnailValid] = useState<boolean>(true);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setThumbnail(base64 as string);
      setIsThumbnailValid(isValidBase64(base64 as string));
    }
  };

  const convertToBase64 = (
    file: File
  ): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const isValidBase64 = (str: string) => {
    const base64Regex =
      /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    const base64ImageRegex =
      /^data:image\/(png|jpg|jpeg|gif|webp);base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

    return base64Regex.test(str) || base64ImageRegex.test(str);
  };

  const submit = async () => {
    if (isThumbnailValid) {
      if (!category || !html || !thumbnail) {
        alert("Please fill in all fields");
        return;
      }

      const res = await fetch("/api/create-component", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: uuidv4(),
          category,
          html,
          thumbnail,
        }),
      });
      if (!res.ok) {
        throw new Error("Error generating the response");
      }
      if (!res.body) {
        throw new Error("Empty response body");
      }

      setCategory("");
      setHtml("");
      setThumbnail("");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="bg-slate-400 p-3 backdrop-blur-sm shadow-lg border-none">
        <div className="p-4 flex flex-col gap-4">
          <div className="text-4xl font-bold m-auto">Add Component</div>
          <div className="text-slate-800 font-semibold">Select Category:</div>
          <div className="flex justify-between items-center">
            <Select
              value={category}
              onValueChange={(selectedCategory) =>
                setCategory(selectedCategory)
              }
            >
              <SelectTrigger className="w-fit lg:w-[180px] border-2 bg-gray-800 text-white">
                <span className="hidden lg:block text-[12px]">
                  Choose Category
                </span>
              </SelectTrigger>
              <SelectContent className="p-2">
                {COMPONENTS_CATEGORY.map((category) => (
                  <SelectGroup key={category.category}>
                    <SelectLabel>{category.category}</SelectLabel>
                    {category.items.map((item) => (
                      <SelectItem
                        className="cursor-pointer"
                        value={item.id}
                        key={item.id}
                      >
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
            <span>{category}</span>
          </div>
          <div className="text-slate-800 font-semibold">Picture:</div>
          <input
            id="picture"
            type="file"
            className="cursor-pointer"
            onChange={handleFileUpload}
          />
          <span className="max-w-[300px]">{thumbnail}</span>
          <div className="text-slate-800 font-semibold">HTML code:</div>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            rows={10}
            cols={50}
            placeholder="Enter your HTML code here"
            className="border border-gray-300 rounded-md p-2"
          />
          <Button
            className="bg-slate-800 text-white cursor-pointer"
            onClick={submit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
