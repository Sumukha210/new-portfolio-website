import About from "@/modules/about/About";
import Hero from "@/modules/hero/Hero";
import Navbar from "@/modules/navbar/Navbar";
import Project from "@/modules/projects/Project";
import Skills from "@/modules/skills/Skills";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
    </div>
  );
};

export default MainPage;
