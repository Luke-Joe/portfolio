import React from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/resume.pdf";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-3 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/privacy">
        Privacy
      </Link>
      <Link classname="p-4" to="/projects">
        Projects
      </Link>
      <a href={Resume} className="p-4" target="_blank" rel="noreferrer">
        Resume
      </a>
    </div>
  );
};

export default Dropdown;
