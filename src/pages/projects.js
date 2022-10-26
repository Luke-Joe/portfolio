import React from "react";
import Mondo from "../images/Mondo.png";

const projects = () => {
  const items = [
    {
      id: 1,
      src: Mondo,
    },
    {
      id: 2,
      src: Mondo,
    },
    {
      id: 3,
      src: Mondo,
    },
    {
      id: 4,
      src: Mondo,
    },
    {
      id: 5,
      src: Mondo,
    },
    {
      id: 6,
      src: Mondo,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center dynamic-card">
        <div className="bg-slate-800 text-slate-200 px-16 sm:max-w-xl">
          <h1 className="text-3xl uppercase font-black pb-6">Projects</h1>
          <div className="portfolio-container">
            {items.map(({ id, src }) => (
              <div key={id} className="portfolio-item">
                <img src={src} className="portfolio-image" alt="" />
                <div className="flex items-center justify-center py-1">
                  <h3 className="font-semibold">Mondo Dodgeball</h3>
                </div>
                <div className="flex items-center justify-center pb-3">
                  <p className="text-center">
                    This is a description of what this app does
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
