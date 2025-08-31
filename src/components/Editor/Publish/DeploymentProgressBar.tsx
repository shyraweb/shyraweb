"use client";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export default function DeploymentProgressBar({ onClose }: { onClose: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 90000; // 2 minutes
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (percentage >= 100) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      onClose();
    }
  }, [progress, onClose]);

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-xl w-fit max-w-[30rem] flex flex-col gap-4 h-fit"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-black">Preparing your website...</h3>
        <p className="text-gray-700 text-sm">
          Please wait while your website is being deployed. This may take a few seconds.
        </p>
        <div className="flex flex-col items-center gap-4 w-full">
          <Progress value={progress} className="w-full" />
          <p>{Math.round(progress)}%</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
