import { useState } from "react";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 sticky top-0 z-50">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <img src="/logo.png" alt="Company Logo" className="h-8 mr-2" / */}
        <span className="font-semibold text-xl tracking-tight">
          Company Name
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#services"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Services
          </a>
          <a
            href="#blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Blog
          </a>
          <a
            href="#portfolio"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
          >
            Contact
          </a>
        </div>
        <div>
          {loggedIn ? (
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
              Log out
            </button>
          ) : (
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
              Log in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
