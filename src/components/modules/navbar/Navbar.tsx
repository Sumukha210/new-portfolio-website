import React, { useState } from "react";
import { Container, Nav } from "./NavStyles";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileOpen] = useState(false);

  return (
    <Nav>
      <div className="container">
        <div className="inner-container">
          <Container className={`${isMobileMenuOpen ? "mobileMenuOpen" : ""}`}>
            <div className="logo subtitle-1">
              <span>KBS.</span>
            </div>

            <div className="navMenu">
              <ul>
                <li className="subtitle-5">Home</li>
                <li className="subtitle-5">About</li>
                <li className="subtitle-5">Project</li>
                <li className="subtitle-5">Blog</li>
                <li className="subtitle-5">Contact</li>
              </ul>
            </div>

            <div
              className="mobileMenu"
              onClick={() => setMobileOpen(prevState => !prevState)}>
              {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </Container>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
