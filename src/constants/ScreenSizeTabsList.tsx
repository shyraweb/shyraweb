import { ActiveResponsivenessTypes } from "@/types/editor";
import { DesktopIcon, MobileIcon, TabletIcon } from "@/icons";

export const SCREEN_SIZE_TABS: ActiveResponsivenessTypes[] = [
  {
    id: 1,
    value: "w-[inherit]",
    icon: (props) => <DesktopIcon {...props} />,
    width: "100%",
    name: "Desktop",
  },
  {
    id: 2,
    value: "w-[768px]",
    icon: (props) => <TabletIcon {...props} />,
    width: "768px",
    name: "Tablet",
  },
  {
    id: 3,
    value: "w-[425px]",
    icon: (props) => <MobileIcon {...props} />,
    width: "425px",
    name: "Mobile",
  },
];