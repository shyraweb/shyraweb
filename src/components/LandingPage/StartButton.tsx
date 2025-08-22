"use client";
import { useRouter } from "next/navigation";

export default function StartButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/editor")}
      className="btnBg rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5"
    >
      Get Started
    </button>
  );
}
