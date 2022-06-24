import React, { useRef } from "react";
import About from "@/modules/about/About";
import Hero from "@/modules/hero/Hero";
import Layout from "@/modules/Layout";
import Skills from "@/modules/skills/Skills";
import dynamic from "next/dynamic";
import { useOnScreen } from "@/utils/useOnScreen";
import SEO from "@/utils/SEO";
import Project from "@/modules/projects/Project";
import axios from "axios";
import Blog from "@/modules/blog/Blog";
import { ArticleTypes } from "@/utils/types";

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

interface MainPageProps {
  articles: null | ArticleTypes[];
}

const MainPage: React.FC<MainPageProps> = ({ articles }) => {
  const bodyHeight = 3000;
  const ContactRef = useRef(null);
  const isContactIntersecting = useOnScreen(ContactRef, `${bodyHeight / 2}px`);

  return (
    <Layout>
      <SEO />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Blog articles={articles} />
      <div ref={ContactRef} id="contactSection">
        {isContactIntersecting && <DynamicContactUsComponent />}
      </div>
    </Layout>
  );
};

export default MainPage;

export async function getStaticProps() {
  const result = await axios.get(
    "https://dev.to/api/articles/me/published?per_page=6",
    {
      headers: {
        "api-key": process.env.DEVBLOG_API_KEY,
      },
    }
  );

  return {
    props: {
      articles: result.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 432000, // 5 days in  seconds
  };
}
