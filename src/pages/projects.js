import React from "react";
import Mondo from "../assets/MUNDOICON.png";
import Plane from "../assets/PLANE.png";
import test from "../assets/Mondo.png";
import Java from "../assets/Java.png";
import Chef from "../assets/Chef.PNG";

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
      src: Chef,
      title: "Sleepy Chef",
      description: "Cooking simulation created with a team for UBC Game Dev",
      repo: "https://www.ubcgamedev.com/sleepy-chef",
    },
    {
      id: 3,
      src: Plane,
      title: "Paper Plane",
      description: "Endless faller featuring a paper plane",
      repo: "https://github.com/Luke-Joe/Paper-Plane",
    },
    {
      id: 4,
      src: Java,
      title: "Java Idle Game",
      description: "Basic clicker/idle game created using Java",
      repo: "https://github.com/Luke-Joe/idle-game",
    },
    // {
    //   id: 5,
    //   src: Mondo,
    //   title: "title",
    //   description: "test description ",
    //   repo: "",
    // },
    // {
    //   id: 6,
    //   src: Mondo,
    //   title: "title",
    //   description: "test description ",
    //   repo: "",
    // },
  ];

  return (
    <>
      <div className="flex justify-center items-center dynamic-card">
        <div className="bg-slate-800 text-slate-200 px-16 sm:max-w-xl">
          <h1 className="text-3xl uppercase font-black pb-3 text-center sm:text-left">
            Projects
          </h1>
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
