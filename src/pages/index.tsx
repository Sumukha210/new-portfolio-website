import React, { useRef } from "react";
import About from "@/modules/about/About";
import Hero from "@/modules/hero/Hero";
import Layout from "@/modules/Layout";
import Skills from "@/modules/skills/Skills";
import dynamic from "next/dynamic";
import { useOnScreen } from "@/utils/useOnScreen";
import SEO from "@/utils/SEO";
import Project from "@/modules/projects/Project";

const DynamicContactUsComponent = dynamic(
  () => import("@/modules/contact/Contact"),
  {
    loading: () => (
      <p className="loadingText subtitle-4">
        Contact us Loading, please wait...
      </p>
    ),
  }
);

const MainPage = () => {
  const bodyHeight = 800;
  const ContactRef = useRef(null);
  const isContactIntersecting = useOnScreen(ContactRef, `${bodyHeight / 2}px`);

  return (
    <Layout>
      <SEO />
      <Hero />
      <About />
      <Skills />
      <Project />

      <div ref={ContactRef} id="contactSection">
        {isContactIntersecting && <DynamicContactUsComponent />}
      </div>
    </Layout>
  );
};

export default MainPage;
