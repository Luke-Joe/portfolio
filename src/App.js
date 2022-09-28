import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import ME109 from "./components/ME109";
import Footer from "./components/Footer";
import Home from "./pages/index";
import Privacy from "./pages/privacy";
import Projects from "./pages/projects";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <div className="bg-slate-800">
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <div className="h-56">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <OrbitControls />
            <ME109 />
          </Canvas>
        </div>
        <div className="h-screen shadow-2xl flex-auto justify-center items-center dynamic-card">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
