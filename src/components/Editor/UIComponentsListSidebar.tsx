import { AvailableComponent } from "@/types/editor";

export default function UIComponentsListSidebar({
  sidebarComponentsList,
  setHoveredComponent,
}: {
  sidebarComponentsList: AvailableComponent[];
  setHoveredComponent: (comp: AvailableComponent | null) => void;
}) {
  return (
    <aside className="w-44 bg-slate-100 text-white p-2 pr-1 flex flex-col shadow-lg z-30 border-r-2 h-[calc(100dvh-65px)]">
      <div className="flex-grow overflow-y-auto custom-scrollbar rounded-md pr-1">
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
            className="w-full gap-2 text-left p-3 mb-3 bg-slate-300 hover:bg-transparent hover:border-slate-300 border-2 border-transparent rounded-md flex items-center space-y-1 transition-colors duration-200 focus:outline-none"
          >
            <span className="text-xl">{comp.icon}</span>
            <span className="text-[14px] font-semibold text-slate-900">{comp.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
