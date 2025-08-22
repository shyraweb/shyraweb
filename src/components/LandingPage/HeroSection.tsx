import dynamic from "next/dynamic";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const StartButton = dynamic(
  () => import("@/components/LandingPage/StartButton"),
  {
    ssr: false,
  }
);

export default function HeroSection() {
  const websiteFeatures = [
    { word: "responsive", color: "#3498db" }, // A nice blue
    { word: "optimized", color: "#2ecc71" }, // A fresh green
    { word: "error-free", color: "#e74c3c" }, // A bold red
    { word: "user-friendly", color: "#f1c40f" }, // A warm yellow
    { word: "secure", color: "#9b59b6" }, // A deep purple
    { word: "accessible", color: "#34495e" }, // A dark gray-blue
    { word: "engaging", color: "#e67e22" }, // A vibrant orange
    { word: "scalable", color: "#1abc9c" }, // A teal green
    { word: "visually appealing", color: "#e84393" }, // A bright pink
    { word: "cross-browser compatible", color: "#2c3e50" }, // A charcoal gray
  ];

  return (
    <section className="py-16 md:py-24 text-center mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-8xl text-gray-900 mb-6 leading-normal font-semibold tracking-tight">
          <motion.h1
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            className={cn("relative mb-6")}
            layout
          >
            Create a <ContainerTextFlip words={websiteFeatures} />
            <br className="hidden md:inline" />
          </motion.h1>
          <span className="mt-1">website without limits</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Build your dream website, no coding needed. Simply choose a template
          and make it your own.
          {/* Create a website easily without coding, there are various templates that can be customized according to your needs. */}
        </p>
        <div className="mb-16">
          <StartButton />
        </div>

        {/* Laptop Mockup Image (Placeholder) */}
        <div className="relative w-full max-w-6xl mx-auto mt-8">
          <img
            src="https://placehold.co/1200x700/E0E7FF/6B46C1?text=Laptop+Mockup"
            alt="Laptop showing website dashboard"
            className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/1200x700/E0E7FF/6B46C1?text=Laptop+Mockup+Error";
            }}
          />
        </div>
      </div>
    </section>
  );
}
