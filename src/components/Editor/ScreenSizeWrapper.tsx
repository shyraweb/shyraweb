import { SCREEN_SIZE_TABS } from "@/constants/ScreenSizeTabsList";
import { ActiveResponsivenessTypes } from "@/types/editor";

interface Props {
  sizeSelected?: { value: string; width: string };
  handleSizeSelection: (state: ActiveResponsivenessTypes) => void;
}

export function ScreenSizeToggle({ sizeSelected, handleSizeSelection }: Props) {
  return (
    <div className="flex justify-end gap-1 shadow-2xl bg-white rounded-md w-fit">
      {SCREEN_SIZE_TABS.map((screen) => {
        const isSelected = sizeSelected?.value === screen.value;
        return (
          <div
            key={screen.value}
            onClick={() => handleSizeSelection(screen)}
            className="relative group cursor-pointer"
            title={screen.name}
          >
            <div
              className={`flex items-center size-10 justify-center md:rounded-md px-1 text-sm font-semibold transition-all duration-300",
                ${
                  isSelected ?
                  "bg-white border rounded-md border-[#8B5CF6] text-purple-700" : "hover:bg-purple-100"
                }`}
            >
              <screen.icon />
            </div>
          </div>
        );
      })}
    </div>
  );
}
