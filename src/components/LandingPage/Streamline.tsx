export default function Streamline() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Transform your online presence with{" "}
          <br className="hidden md:inline" /> effortless creativity and robust
          performance,
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          our platform ensures your website journey is packed with unparalleled
          advantages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: No coding or design experience required */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-transparent transition-all duration-300 ease-in-out card-hover-effect flex flex-col items-start">
            <div className="p-3 bg-purple-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No coding or design <br /> experience required
            </h3>
            <p className="text-gray-600 text-base">
              Unlock your creative potential: seamlessly craft your website with
              Flow, where no coding or design experience is required – making
              web building accessible to all.
            </p>
          </div>

          {/* Card 2: Easy-to-use web building tools */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-transparent transition-all duration-300 ease-in-out card-hover-effect flex flex-col items-start">
            <div className="p-3 bg-blue-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Easy-to-use web <br /> building tools
            </h3>
            <p className="text-gray-600 text-base">
              Streamline your web building journey: save valuable time and cut
              costs with our easy-to-use tools for efficient and budget-friendly
              website creation.
            </p>
          </div>

          {/* Card 3: Grow your business online */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-transparent transition-all duration-300 ease-in-out card-hover-effect flex flex-col items-start">
            <div className="p-3 bg-green-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Grow your <br /> business online
            </h3>
            <p className="text-gray-600 text-base">
              Empower you to connect with a wider audience and foster online
              growth, unleashing the full potential of your digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
