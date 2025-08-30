"use client";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { ROUTES } from "@/constants/Routes";
import Logo from "@/icons/Logo";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

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
        <Link
          href={ROUTES.default}
          className={`text-[26px] block text-text-primary w-24 h-12 font-bold cursor-pointer ${dancingScript.className}`}
          aria-label="SiRa AI"
        >
          <Logo />
        </Link>
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
