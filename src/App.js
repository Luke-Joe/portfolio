import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import ME109 from "./components/ME109";
import Tank from "./components/Tank";
import Footer from "./components/Footer";
import Home from "./pages/index";
import Privacy from "./pages/privacy";
import Work from "./pages/work";
import NotFound from "./pages/404";
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
      <div className="min-h-screen h-fit bg-slate-800">
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <div className="h-96">
          <Canvas camera={{ fov: 75, position: [0, 2, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <OrbitControls />
            <Tank />
          </Canvas>
        </div>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Error" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
