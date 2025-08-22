import dynamic from "next/dynamic";

const StartButton = dynamic(
  () => import("@/components/LandingPage/StartButton"),
  {
    ssr: false,
  }
);

export default function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <p className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
          <svg
            className="w-4 h-4 inline-block mr-1"
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
          Get Started
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to start building your <br className="hidden md:inline" /> dream
          website?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Unlock the power of creativity and transform your vision into a
          stunning website with Flow Web Builder.
        </p>
        <StartButton />

        {/* Image below the CTA */}
        <div className="relative w-full max-w-6xl mx-auto mt-16">
          <img
            src="https://placehold.co/1200x700/E0E7FF/6B46C1?text=Website+Builder+Mockup"
            alt="Website builder interface mockup"
            className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://placehold.co/1200x700/E0E7FF/6B46C1?text=Image+Error";
            }}
          />
        </div>
      </div>
    </section>
  );
}
