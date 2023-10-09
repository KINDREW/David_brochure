import { useRef } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

import "./navbar.css";

const Navabr = () => {
  const targetRef = useRef(null);

  const sideMenu = () => {
    const navbar = targetRef.current;

    if (navbar) {
      if (navbar.classList.contains("appear")) {
        navbar.classList.remove("appear");
      } else {
        navbar.classList.add("appear");
      }
    }
  };

  return (
    <div className="navbar">
      <nav>
        <div class="bar" onClick={sideMenu}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <ul className="links " ref={targetRef}>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed
            duration={500}
          >
            <li>Home</li>
          </ScrollLink>
          <ScrollLink
            to="ourstory"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed
            duration={500}
          >
            <li>Our Story</li>
          </ScrollLink>
          <ScrollLink
            to="details"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed
            duration={500}
          >
            <li>Details</li>
          </ScrollLink>
          <li>Brochure</li>
          <li>Gallery</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navabr;
