import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Home from "./pages/index";
import Privacy from "./pages/privacy";
import Projects from "./pages/projects";

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
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
