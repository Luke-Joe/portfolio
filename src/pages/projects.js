import React from "react";
import IMG1 from "../images/Mondo.png";

const projects = () => {
  return (
    <>
      <div className="flex justify-center items-center dynamic-card">
        <div className="bg-slate-800 text-slate-200 sm:px-0 px-9 sm:max-w-xl">
          <h1 className="text-3xl uppercase font-black py-6">Projects</h1>

          <div className="portfolio-container">
            <div className="portfolio-item">
              <img src={IMG1} className="portfolio-image" alt="" />
              <div className="flex items-center justify-center">
                <h3>Mondo Dodgeball</h3>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-center">
                  This is a description of what this app does
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
