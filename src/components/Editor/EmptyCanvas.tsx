import AILoader from "./AILoader";

export default function EmptyCanvas() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-full space-y-4 max-w-md mx-auto">
      <div className="text-violet-700">
        <AILoader canvasView={true} />
      </div>
      <div className="text-center text-gray-500 text-lg mt-20">
        Hover over a component type on the left to see UIs, then click a
        any UI to add it here.
      </div>
    </div>
  );
}
