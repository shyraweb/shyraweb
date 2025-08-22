import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Flow Logo and Description */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <a
              href="#"
              className="text-purple-700 text-3xl font-bold flex items-center mb-4"
            >
              <svg
                className="w-8 h-8 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              Flow
            </a>
            <p className="text-gray-600 text-base max-w-xs mb-6">
              Unleashing limitless creativity and unrivaled functionality, one
              pixel at a time, on the path to your unique online triumph with
              Flow.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="#"
                className="text-gray-500 hover:text-purple-700 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.54V9.16h3.52v11.29zM5.3 7.74c-1.16 0-2.06-.92-2.06-2.06 0-1.14.9-2.06 2.06-2.06 1.15 0 2.06.92 2.06 2.06 0 1.14-.91 2.06-2.06 2.06zm15.15 12.71h-3.52V14.8c0-1.3-.47-2.18-1.62-2.18-1.2 0-1.92.81-1.92 2.18v5.65H10.1V9.16h3.52v1.51c.47-.72 1.3-1.75 3.17-1.75 3.42 0 4.01 2.25 4.01 6.94v5.59h-.05z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="#"
                className="text-gray-500 hover:text-purple-700 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.752 11.24H14.68l-6.83-8.894L1.77 21.75H.407l7.495-8.582L0 2.25h8.607l5.593 7.268L18.244 2.25zm-2.91 16.437h1.47L6.035 4.29H4.474l10.86 14.397z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="text-gray-500 hover:text-purple-700 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.5 2.5c-1.371 0-2.315.002-3.138.036-.823.034-1.405.174-1.902.378-.5.204-.92.476-1.341.897-.421.421-.693.841-.897 1.341-.204.497-.344 1.079-.378 1.902-.034.823-.036 1.767-.036 3.138s.002 2.315.036 3.138c.034.823.174 1.405.378 1.902.204.5.476.92.897 1.341.421.421.693.841.897 1.341.497.204 1.079.344 1.902.378.823.034 1.767.036 3.138.036s2.315-.002 3.138-.036c.823-.034 1.405-.174 1.902-.378.5-.204.92-.476 1.341-.897.421.421.693-.841.897-1.341.204-.497.344-1.079.378-1.902.034-.823.036-1.767.036-3.138s-.002-2.315-.036-3.138c-.034-.823-.174-1.405-.378-1.902-.204-.5-.476-.92-.897-1.341-.421-.421-.841-.693-1.341-.897-.497-.204-1.079-.344-1.902-.378-.823-.034-1.767-.036-3.138-.036zm0 2.137c1.35 0 1.782.002 2.41.03.627.028 1.006.136 1.28.248.274.112.446.257.591.402.145.145.29.317.402.591.112.274.22.653.248 1.28.028.627.03 1.059.03 2.41s-.002 1.782-.03 2.41c-.028.627-.136 1.006-.248 1.28-.112.274-.257.446-.402.591-.145.145-.317.29-.591.402-.274.112-.653.22-1.28.248-.627.028-1.059.03-2.41.03s-1.782-.002-2.41-.03c-.627-.028-1.006-.136-1.28-.248-.274-.112-.446-.257-.591-.402-.145-.145-.29-.317-.402-.591-.112-.274-.22-.653-.248-1.28-.028-.627-.03-1.059-.03-2.41s.002-1.782.03-2.41c.028-.627.136-1.006.248-1.28.112-.274.257-.446.402-.591.145.145.317-.29.591-.402.274-.112.653-.22 1.28-.248.627-.028 1.059-.03 2.41-.03zm0 3.637c-2.197 0-3.986 1.789-3.986 3.986s1.789 3.986 3.986 3.986 3.986-1.789 3.986-3.986-1.789-3.986-3.986-3.986zm0 2.137c1.025 0 1.849.824 1.849 1.849s-.824 1.849-1.849 1.849-1.849-.824-1.849-1.849.824-1.849 1.849-1.849zm6.406-3.637c-.796 0-1.44-.645-1.44-1.44s.644-1.44 1.44-1.44 1.44.645 1.44 1.44-.644 1.44-1.44 1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="text-gray-500 hover:text-purple-700 transition duration-300"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.406 5.231l-4.144 11.238c-.21.571-.787.954-1.425.954-.638 0-1.215-.383-1.425-.954l-4.144-11.238c-.21-.571-.059-1.215.418-1.587.477-.372 1.157-.432 1.696-.151l3.455 1.884 3.455-1.884c.539-.281 1.219-.221 1.696.151.477.372.628.996.418 1.587z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:col-span-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Features</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    SEO
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Forms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Showcase
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-700 transition duration-300"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-8 mt-8">
          {/* Newsletter Subscription */}
          <div className="mb-6 sm:mb-0 text-center sm:text-left">
            <p className="text-gray-900 font-medium mb-3">
              Join our newsletter to stay up to date on{" "}
              <br className="hidden sm:inline" /> new features and releases
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="btnBg py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-3 max-w-sm">
              By subscribing you agree to our{" "}
              <a href="#" className="underline hover:text-purple-700">
                privacy policy
              </a>{" "}
              and provide consent to receive updates from our company.
            </p>
          </div>

          {/* Terms and Copyright */}
          <div className="flex flex-col items-center sm:items-end text-gray-500 text-sm space-y-2">
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-purple-700 transition duration-300"
              >
                Terms of Service
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="#"
                className="hover:text-purple-700 transition duration-300"
              >
                Privacy Policy
              </a>
            </div>
            <p>&copy; 2023 Flow.All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
