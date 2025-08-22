import { useState } from "react";

export default function HeaderSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-white p-4 md:p-6 shadow-sm rounded-lg mx-auto max-w-7xl mt-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className="text-purple-700 text-2xl font-bold flex items-center"
          >
            <svg
              className="w-6 h-6 mr-2"
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
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {/* <div className="hidden md:flex flex-grow justify-center space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-purple-700 font-medium transition duration-300 ease-in-out"
          >
            Templates
          </a>
        </div> */}

        {/* Auth Buttons (Desktop) */}
        {/* <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-purple-700 font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out">
            Log in
          </button>
          <button className="btnBg py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5">
            Sign up
          </button>
        </div> */}
      </div>

      {/* Mobile Menu (Hidden by default) */}
      {/* <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden mt-4 space-y-2`}
      >
        <a
          href="#"
          className="block text-gray-600 hover:text-purple-700 font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Templates
        </a>
        <button className="block w-full text-left text-gray-600 hover:text-purple-700 font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out">
          Log in
        </button>
        <button className="btnBg py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5">
          Sign up
        </button>
      </div> */}
    </nav>
  );
}
