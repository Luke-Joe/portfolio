import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <div className="md:flex md:items-center md:justify-center">
      <nav
        className="flex justify-between items-center h-16 text-white relative shadow-sm font-mono text-lg my-0 sm:w-fit space-x-60"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          Luke Joe
        </Link>
        <div className="px-4 cursor-pointer sm:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="pr-8 sm:block hidden ">
          <Link className="p-4" to="/">
            Home
          </Link>
          <Link className="p-4" to="/projects">
            Projects
          </Link>
          <Link className="p-4">Resume</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
