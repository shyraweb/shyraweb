import React from "react";

export default function Templates() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <p className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium text-center mb-2">
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
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          Template
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Find your perfect starting point <br className="hidden md:inline" />{" "}
          of our website templates
        </h2>

        {/* Horizontal Scrolling Cards Container */}
        <div className="flex overflow-x-auto gap-8 pb-4 no-scrollbar">
          {/* Product Card 1: KLOUD-SaaS Website Homepage */}
          <div className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            {/* <img
                    src="https://placehold.co/600x350/E0E7FF/6B46C1?text=KLOUD-SaaS"
                    alt="KLOUD-SaaS Website Homepage"
                    className="w-full h-48 object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/600x350/E0E7FF/6B46C1?text=Image+Error";
                    }}
                  /> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                KLOUD-SaaS Website <br /> Homepage
              </h3>
              <p className="text-gray-500 text-sm mb-4">By Awe Design Studio</p>
              {/* Content details as shown in the image */}
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-purple-500"
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
                  Development Canvas
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-purple-500"
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
                  Marketing & SEO
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-purple-500"
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
                  Track & Analyze
                </div>
              </div>
            </div>
          </div>

          {/* Product Card 2: E-Commerce Website Homepage */}
          <div className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            {/* <img
                    src="https://placehold.co/600x350/F0F4F8/6B46C1?text=E-Commerce"
                    alt="E-Commerce Website Homepage"
                    className="w-full h-48 object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/600x350/F0F4F8/6B46C1?text=Image+Error";
                    }}
                  /> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                E-Commerce Website <br /> Homepage
              </h3>
              <p className="text-gray-500 text-sm mb-4">By Awe Design Studio</p>
              {/* Content details as shown in the image */}
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-purple-500"
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
                  Extend Your Productivity
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-purple-500"
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
                  AI-Driven Insights
                </div>
              </div>
            </div>
          </div>

          {/* Product Card 3: AI Website Responsive Landing Page */}
          <div className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            {/* <img
                    src="https://placehold.co/600x350/E0E7FF/6B46C1?text=AI+Website"
                    alt="AI Website Responsive Landing Page"
                    className="w-full h-48 object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/600x350/E0E7FF/6B46C1?text=Image+Error";
                    }}
                  /> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                AI Website Responsive <br /> Landing Page
              </h3>
              <p className="text-gray-500 text-sm mb-4">By Awe Design Studio</p>
              {/* Content details as shown in the image */}
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-purple-500"
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
                  Create What You Are Imagine
                </div>
              </div>
            </div>
          </div>

          {/* Product Card 4: Another example card (as seen partially in the image) */}
          <div className="flex-none w-80 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            {/* <img
                    src="https://placehold.co/600x350/F0F4F8/6B46C1?text=AUT+AWE"
                    alt="Another Website Template"
                    className="w-full h-48 object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/600x350/F0F4F8/6B46C1?text=Image+Error";
                    }}
                  /> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                AUT AWE <br /> TEST
              </h3>
              <p className="text-gray-500 text-sm mb-4">By Awe Design Studio</p>
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-purple-500"
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
                  Modern Layout
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 px-4">
          <p className="text-gray-600 text-lg max-w-xl text-center md:text-left mb-6 md:mb-0">
            Embark on a journey of creative freedom: unleash your imagination
            and craft unique websites with our versatile website authoring tool.
          </p>
          <button className="bg-white text-purple-700 font-medium py-3 px-8 rounded-full border border-gray-300 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 flex items-center">
            Explore All Templates
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
