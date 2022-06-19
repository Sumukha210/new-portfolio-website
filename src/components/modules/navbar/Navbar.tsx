import React from "react";
import { Container, Nav } from "./NavStyles";

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <div className="inner-container">
          <Container>
            <div className="logo subtitle-1">
              <span>KBS.</span>
            </div>

            <ul className="navMenu">
              <li className="subtitle-5">Home</li>
              <li className="subtitle-5">About</li>
              <li className="subtitle-5">Project</li>
              <li className="subtitle-5">Blog</li>
              <li className="subtitle-5">Contact</li>
            </ul>
          </Container>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
