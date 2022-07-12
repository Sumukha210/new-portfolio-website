import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
