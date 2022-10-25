import React from "react";
import IMG1 from "../images/Mondo.png";

const projects = () => {
  return (
    <>
      <div className="flex justify-center items-center dynamic-card">
        <div className="bg-slate-800 text-slate-200 px-16 sm:max-w-xl">
          <h1 className="text-3xl uppercase font-black">Projects</h1>

          <div className="portfolio-container">
            <article className="portfolio-item">
              <div className="portfolio-image">
                <img src={IMG1} alt="" />
              </div>
              <h3>Title</h3>
              <div className="portfolio-links">
                <a className="btn">Github</a>
                <a>Demo</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
