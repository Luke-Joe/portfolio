import React from "react";
import Mondo from "../assets/MUNDOICON.png";
import Plane from "../assets/PLANE.png";
import test from "../assets/Mondo.png";

const projects = () => {
  const items = [
    {
      id: 1,
      src: Mondo,
      title: "Mondo Dodgeball",
      description: "Two player 1v1 game for Android",
      repo: "https://github.com/Luke-Joe/MONDO",
    },
    {
      id: 2,
      src: test,
      title: "Sleepy Chef",
      description: "test description ",
      repo: "",
    },
    {
      id: 3,
      src: Plane,
      title: "Paper Plane",
      description: "Fall down game featuring a paper plane",
      repo: "",
    },
    {
      id: 4,
      src: Mondo,
      title: "title",
      description: "test description ",
      repo: "",
    },
    {
      id: 5,
      src: Mondo,
      title: "title",
      description: "test description ",
      repo: "",
    },
    {
      id: 6,
      src: Mondo,
      title: "title",
      description: "test description ",
      repo: "",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center dynamic-card">
        <div className="bg-slate-800 text-slate-200 px-16 sm:max-w-xl">
          <h1 className="text-3xl uppercase font-black pb-3">Projects</h1>
          <div className="portfolio-container">
            {items.map(({ id, src, title, description, repo }) => (
              <div key={id} className="portfolio-item">
                <a href={repo} target="_blank">
                  <img
                    src={src}
                    className="object-cover portfolio-image"
                    alt=""
                  />
                </a>
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
