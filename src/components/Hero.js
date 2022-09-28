import React from "react";
import { Link } from "react-router-dom";
import Box from "./Box";

function Hero() {
  return (
    // <div className="bg-white h-screen flex flex-col justify-center items-center">
    //   <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
    //     TEST
    //   </h1>
    //   <Link
    //     className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition
    //   duration-300 ease-in-out flex items-center animate-bounce"
    //   >
    //     HI THERE
    //   </Link>
    // </div>
    <>
      <div className="text-white bg-slate-800 dynamic-element dynamic-card">
        <h1 className="flex uppercase font-black text-3xl ">Luke (FILLER)</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
}

export default Hero;
