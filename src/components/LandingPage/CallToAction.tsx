import { ROUTES } from "@/constants/Routes";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 btnBg">
      <div className="container mx-auto px-4 max-w-7xl text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
          Create your website today
        </h2>
        <p className="text-base text-white mb-2 max-w-3xl mx-auto">
          Create a stunning website in minutes with ShyRa Web easiest website
          builder.
        </p>
        <p className="text-base text-white mb-10 max-w-3xl mx-auto">
          No coding required. Just choose a template, customize, and publish.
        </p>
        <Link
          href={ROUTES.editor}
          className={`bg-white text-black font-[500] text-base py-3 px-8 w-fit rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5`}
          aria-label="ShyRa Web"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
