import { SelectedComponent } from "@/types/editor";
import dynamic from "next/dynamic";
const EmptyCanvas = dynamic(
  () => import("@/components/Editor/Canvas/EmptyCanvas")
);

export default function CanvasSection({
  selectedComponents,
  renderComponent,
}: {
  selectedComponents: SelectedComponent[];
  renderComponent: (
    component: SelectedComponent,
    index: number
  ) => React.ReactNode;
}) {
  return (
    <section className="flex-1 px-14 pt-6 pb-0 overflow-y-auto custom-scrollbar relative">
      <div className="h-8 bg-indigo-100 flex items-center justify-between px-4 rounded-lg rounded-b-none">
        <div className="flex gap-2">
          {["bg-red-600", "bg-yellow-400", "bg-green-400"].map((color: string) => (
            <div
              key={color}
              className={`size-3 rounded-2xl ${color}`}
            />
          ))}
        </div>
        <h1 className="bg-white ml-[-4rem] shadow-2xl h-6 px-20 pt-0.5 rounded text-center text-sm font-semibold text-gray-800">
          index.html
        </h1>
        <div />
      </div>
      <div className="bg-white shadow-xl rounded-lg rounded-t-none h-[93%] overflow-hidden pt-30 overflow-y-auto custom-scrollbar p-6 flex flex-col space-y-8">
        {selectedComponents.length === 0 && <EmptyCanvas />}
        {selectedComponents.map((component, index) =>
          renderComponent(component, index)
        )}
      </div>
    </section>
  );
}
