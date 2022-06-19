import About from "@/modules/about/About";
import Hero from "@/modules/hero/Hero";
import Navbar from "@/modules/navbar/Navbar";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default MainPage;
