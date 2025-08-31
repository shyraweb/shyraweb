"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LogoWrapper = dynamic(
  () => import("@/components/SharedComponents/LogoWrapper")
);

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }} // Starts above the screen, hidden
      animate={{ y: 0, opacity: 1 }} // Animates into position
      transition={{ duration: 1, ease: "easeOut" }} // Adjust timing here
      className="flex justify-between px-5 py-3 fixed w-full top-0 z-50"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="flex justify-between w-full">
        <LogoWrapper fontSizeClass="text-[28px]" />
        {/* <Link
          href={ROUTES.default}
          target="_blank"
          className={`text-text-primary font-bold cursor-pointer hover:scale-[1.2]`}
          aria-label={`Link to custom templates`}
        >
          Templates
        </Link> */}
      </div>
    </motion.header>
  );
}
