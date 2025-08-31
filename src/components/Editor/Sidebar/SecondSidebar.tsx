import { Sample } from "@/types/editor";
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
  list: Sample[];
  addComponent: (id: string, itemId: string) => void;
}) {
  return (
    <>
      <motion.div
        className="absolute left-[6.35rem] rounded-2xl top-1 h-[calc(100dvh-80px)] w-72 bg-white text-black p-4 pr-2 shadow-2xl z-40 flex flex-col"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-4 text-violet-700">{title}</h3>
        <div className="flex-grow overflow-y-auto custom-scrollbar space-y-3 pr-2">
          {list.map((item) => (
            <button
              key={item._id}
              onClick={() => addComponent(id, item._id)}
              className="w-full text-left p-1 hover:bg-purple-600 rounded-md"
            >
              <Image src={item.thumbnail ?? ""} alt="" width={288} height={100} />
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
