import { motion } from "framer-motion";
import Image from "next/image";

export default function SecondSidebar({
  id,
  title,
  list,
  addComponent,
}: {
  id: string;
  title: string;
  list: any[];
  addComponent: (id: string, itemId: string) => void;
}) {
  return (
    <>
      <motion.div
        className="absolute left-44 top-0 h-full w-72 bg-gray-700 text-white p-4 pr-2 shadow-xl z-40 flex flex-col"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <div className="flex-grow overflow-y-auto custom-scrollbar space-y-3 pr-2">
          {list.map((item) => (
            <button
              key={item._id}
              onClick={() => addComponent(id, item._id)}
              className="w-full text-left p-1 hover:bg-gray-500 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <div className="w-full h-fit bg-gray-600 rounded-sm flex items-center justify-center text-xs text-gray-200">
                <Image src={item.thumbnail} alt="" width={288} height={100} />
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
