import React, { useRef } from "react";
import About from "@/modules/about/About";
import Hero from "@/modules/hero/Hero";
import Layout from "@/modules/Layout";
import Project from "@/modules/projects/Project";
import Skills from "@/modules/skills/Skills";
import dynamic from "next/dynamic";
import { useOnScreen } from "@/utils/useOnScreen";
import SEO from "@/utils/SEO";

const DynamicContactUsComponent = dynamic(
  () => import("@/modules/contact/Contact"),
  {
    loading: () => (
      <p className="loadingText subtitle-3">
        Contact us Loading, please wait...
      </p>
    ),
  }
);

const MainPage = () => {
  const ContactRef = useRef(null);
  const isIntersecting = useOnScreen(ContactRef, "200px");

  return (
    <Layout>
      <SEO />
      <Hero />
      <About />
      <Skills />
      <Project />
      <div ref={ContactRef} id="contactSection">
        {isIntersecting && <DynamicContactUsComponent />}
      </div>
    </Layout>
  );
};

export default MainPage;
