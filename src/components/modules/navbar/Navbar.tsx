import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { animateScroll, Link } from "react-scroll";
import { Container, Nav } from "./NavStyles";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileOpen] = useState(false);
  const scrollOptions = (to: string, duration: number = 700) => ({
    to,
    duration,
    spy: true,
    smooth: true,
    offset: -100,
    isDynamic: true,
    "aria-label": `Go to ${to} section`,
    onClick() {
      setMobileOpen(false);
    },
  });

  return (
    <Nav className={`${isMobileMenuOpen ? "activeMenu" : ""}`}>
      <div className="container">
        <div className="inner-container">
          <Container className={`${isMobileMenuOpen ? "mobileMenuOpen" : ""}`}>
            <div
              className="logo subtitle-1"
              onClick={() => animateScroll.scrollToTop()}
            >
              <span>Kbs.</span>
            </div>

            <div className="navMenu">
              <ul>
                <li className="subtitle-5">
                  <Link tabIndex={0} {...scrollOptions("heroSection")}>
                    Home
                  </Link>
                </li>
                <li className="subtitle-5">
                  <Link tabIndex={0} {...scrollOptions("aboutSection")}>
                    About
                  </Link>
                </li>
                <li className="subtitle-5">
                  <Link tabIndex={0} {...scrollOptions("skillsSection")}>
                    Skills
                  </Link>
                </li>
                <li className="subtitle-5">
                  <Link tabIndex={0} {...scrollOptions("projectSection")}>
                    Project
                  </Link>
                </li>
                <li className="subtitle-5">
                  <Link tabIndex={0} {...scrollOptions("blogSection")}>
                    Blog
                  </Link>
                </li>
                <li className="subtitle-5">
                  <Link tabIndex={0} {...scrollOptions("contactSection")}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className="mobileMenu"
              onClick={() => setMobileOpen((prevState) => !prevState)}
            >
              {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </Container>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
