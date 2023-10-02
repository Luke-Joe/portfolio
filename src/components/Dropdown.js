import React from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/resume.pdf";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-cols-3 text-center items-center bg-blue-400 rounded mx-9"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="dropdown-btn" to="/">
        Home
      </Link>
      <Link className="dropdown-btn" to="/projects">
        Projects
      </Link>
      <a
        href={Resume}
        className="dropdown-btn"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </div>
  );
};

export default Dropdown;
