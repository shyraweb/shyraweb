import { motion } from "framer-motion";
import { containerVariants, textVariants } from "@/constants/animationVariants";
import { FEATURES } from "@/constants/features";
import dynamic from "next/dynamic";

const FeatureCard = dynamic(() => import("@/components/LandingPage/FeatureCard"), {
  ssr: false,
});

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium text-center mb-2">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Experience the versatility of Flow{" "}
            <br className="hidden md:inline" /> website authoring tool
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Seamlessly create a dynamic online presence with Flow, where
            innovation meets simplicity. Your website, your way, with ease and
            speed.
          </p>

          {/* Feature Block 1: Efficient teamwork for faster results */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
            <div className="md:w-1/2 text-left">
              <p className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                Collaborative
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Efficient teamwork for <br /> faster results
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Empower your team to collaborate seamlessly and create dynamic
                webpages and designs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-full mr-3 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Less Effort
                    </h4>
                    <p className="text-gray-600 text-base">
                      Streamline your workflow with intuitive tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-full mr-3 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Easy Transform
                    </h4>
                    <p className="text-gray-600 text-base">
                      Transform your ideas into stunning designs effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://placehold.co/600x400/F0F4F8/6B46C1?text=Teamwork+Dashboard"
                alt="Teamwork Dashboard Mockup"
                className="w-full h-auto rounded-lg shadow-xl"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/600x400/F0F4F8/6B46C1?text=Image+Error";
                }}
              />
            </div>
          </div>

          {/* Feature Block 2: Simplify your website's content management experience */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/2 text-left">
              <p className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                Easy Manage
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Simplify your website's <br /> content management experience
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Easily take ownership of your website's content with our
                intuitive content management system.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-full mr-3 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Efficiently manage your content
                    </h4>
                    <p className="text-gray-600 text-base">
                      Update and edit content with ease.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-full mr-3 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Seamless integration
                    </h4>
                    <p className="text-gray-600 text-base">
                      Integrate with other tools for a complete solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://placehold.co/600x400/F0F4F8/6B46C1?text=Content+Management"
                alt="Content Management Mockup"
                className="w-full h-auto rounded-lg shadow-xl"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/600x400/F0F4F8/6B46C1?text=Image+Error";
                }}
              />
            </div>
          </div>
        </div>
      </section>
  );
}
