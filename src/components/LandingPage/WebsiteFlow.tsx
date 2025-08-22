import { WEBSITE_CREATION_STEPS } from "@/constants/WebsiteCreationSteps";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

export default function WebsiteFlow() {
  return (
    <section className="py-28 md:py-28 flex flex-col items-center bg-gray-50">
      <h2 className="text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-8">
        Bring your{" "}
        <span className="bg-clip-text text-transparent gradientBg">
          vision to life
        </span>
      </h2>
      <span className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Get from idea to final layout in just a few steps.</span>
      <div className="w-full py-4">
        <StickyScroll content={WEBSITE_CREATION_STEPS} />
      </div>
    </section>
  );
}
