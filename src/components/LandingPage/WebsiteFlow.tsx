import { WEBSITE_CREATION_STEPS } from "@/constants/WebsiteCreationSteps";
import dynamic from "next/dynamic";
import { CircleCheck } from "lucide-react";

const StartButton = dynamic(
  () => import("@/components/SharedComponents/StartButton")
);

export default function WebsiteFlow() {
  return (
    <section className="py-28 md:py-28 flex flex-col items-center bg-white rounded-3xl">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 text-center">
          Bring your{" "}
          <span className="bg-clip-text text-transparent gradientBg">
            vision to life
          </span>
        </h2>
        <span className="text-sm md:text-lg text-gray-600 mb-16 flex justify-center">
          Get from idea to final layout in just a few steps.
        </span>
        <div className="w-full py-4">
          {WEBSITE_CREATION_STEPS.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-between gap-12 mb-24 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="md:w-1/2 text-left">
                <p className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  Step - {index + 1}
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <div className="space-y-4 mb-8">
                  {step.points.map((point, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="p-2 bg-purple-100 rounded-full mr-3 flex-shrink-0">
                        <CircleCheck className="size-5 text-purple-600" />
                      </div>
                      <p className="text-gray-600 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
                <StartButton title="Try now" />
              </div>
              <div className="md:w-1/2 flex justify-center">
                {/* <img
                src="https://placehold.co/600x400/F0F4F8/6B46C1?text=Teamwork+Dashboard"
                alt="Teamwork Dashboard Mockup"
                className="w-full h-auto rounded-lg shadow-xl"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/600x400/F0F4F8/6B46C1?text=Image+Error";
                }}
              /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
