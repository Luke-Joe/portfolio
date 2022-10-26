import React from "react";
import Mondo from "../assets/Mondo.png";

const projects = () => {
  const items = [
    {
      id: 1,
      src: Mondo,
      title: "Mondo Dodgeball",
      description: "Two player game for Android",
    },
    {
      id: 2,
      src: Mondo,
      title: "title",
      description: "test description ",
    },
    {
      id: 3,
      src: Mondo,
      title: "title",
      description: "test description ",
    },
    {
      id: 4,
      src: Mondo,
      title: "title",
      description: "test description ",
    },
    {
      id: 5,
      src: Mondo,
      title: "title",
      description: "test description ",
    },
    {
      id: 6,
      src: Mondo,
      title: "title",
      description: "test description ",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center dynamic-card">
        <div className="bg-slate-800 text-slate-200 px-16 sm:max-w-xl">
          <h1 className="text-3xl uppercase font-black pb-3">Projects</h1>
          <div className="portfolio-container">
            {items.map(({ id, src, title, description }) => (
              <div key={id} className="portfolio-item">
                <img src={src} className="portfolio-image" alt="" />
                <div className="flex items-center justify-center py-1">
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <div className="flex items-center justify-center pb-3">
                  <p className="text-center">{description}</p>
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
