"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const ContainerTextFlip = dynamic(
  () => import("@/components/ui/container-text-flip")
);

export default function MainHeading() {
  return (
    <h1 className="text-3xl md:text-5xl text-gray-900 leading-normal font-semibold tracking-tight">
      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        className={cn("relative mb-2")}
        layout
      >
        Create a <ContainerTextFlip />
        <br className="hidden md:inline" />
      </motion.h1>
      <span className="mt-1">website without limits</span>
    </h1>
  );
}
