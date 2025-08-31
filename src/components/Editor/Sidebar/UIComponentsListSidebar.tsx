import { AvailableComponent } from "@/types/editor";

export default function UIComponentsListSidebar({
  hoveredComponent,
  sidebarComponentsList,
  setHoveredComponent,
}: {
  hoveredComponent: AvailableComponent | null;
  sidebarComponentsList: AvailableComponent[];
  setHoveredComponent: (comp: AvailableComponent | null) => void;
}) {
  return (
    <aside className="w-fit p-1 flex flex-col z-30 h-[calc(100dvh-65px)] shadow-lg border-r-1">
      <div className="flex-grow overflow-y-auto custom-scrollbar rounded-md">
        {sidebarComponentsList?.map((comp: AvailableComponent) => (
          <button
            key={comp.id}
            onMouseEnter={() => setHoveredComponent(comp)}
            onClick={() => {
              if (!comp.samples || comp.samples?.length === 0) {
                console.warn(`Component ${comp.name} has no samples defined.`);
              } else {
                setHoveredComponent(comp);
              }
            }}
            className={`w-full rounded-2xl mb-2 text-left hover:bg-white hover:shadow-2xl py-2 px-1 flex flex-col items-center transition-colors duration-200 focus:outline-none ${
              hoveredComponent?.id === comp.id && "bg-white shadow-2xl"
            }`}
          >
            <span className="text-xl">{comp.icon}</span>
            <span className="text-[12px] font-medium text-slate-900">
              {comp.name}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
