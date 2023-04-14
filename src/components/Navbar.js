import React, { useState } from "react";

const menu = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About Me", href: "/" },
  { id: 3, title: "Portfolio", href: "/" },
  { id: 4, title: "Contact Me", href: "/" },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-primary shadow">
      <div className="justify-between px-4 mx-auto md:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex md:flex-col items-center justify-between py-3 md:py-5 md:block text-white">
          <a className=" text-3xl" href="javascript:void(0)">
            Black Sea
          </a>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:flex justify-self-center font-semibold md:ml-10 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-5 md:space-y-0 uppercase ">
            {menu.map((item) => (
              <li
                key={item.id}
                className="text-white text-sm font-normal hover:text-green-400 flex items-center justify-center space-x-5 "
              >
                <a href="javascript:void(0)">{item.title}</a>
                <span className="hidden md:flex">/</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
