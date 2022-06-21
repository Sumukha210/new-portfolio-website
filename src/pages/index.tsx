import About from "@/modules/about/About";
import Contact from "@/modules/contact/Contact";
import Hero from "@/modules/hero/Hero";
import Layout from "@/modules/Layout";
import Project from "@/modules/projects/Project";
import Skills from "@/modules/skills/Skills";
import React from "react";

const MainPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </Layout>
  );
};

export default MainPage;
