import { useRef, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navabr = () => {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  const [isOpen, setIsOpen] = useState(true);

  const sideMenu = () => {
    const navbar = targetRef.current;
    const bar = targetRef2.current;

    if (navbar) {
      if (navbar.classList.contains("appear")) {
        navbar.classList.remove("appear");
        bar.classList.remove("change");
      } else {
        navbar.classList.add("appear");
        bar.classList.add("change");
      }
    }
  };

  const closeNav = () => {
    setIsOpen(true);
    const navbar = targetRef.current;

    if (isOpen) {
      navbar.classList.remove("appear");
    }
  };

  return (
    <div className="navbar">
      <nav>
        <div class="bar" onClick={sideMenu} ref={targetRef2}>
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
            <Link to="/">
              <li onClick={closeNav}>Home</li>
            </Link>
          </ScrollLink>

          <ScrollLink
            to="ourstory"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed
            duration={500}
          >
            <li onClick={closeNav}>Our Story</li>
          </ScrollLink>
          <ScrollLink
            to="details"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset as needed
            duration={500}
          >
            <li onClick={closeNav}>Details</li>
          </ScrollLink>
          <li onClick={closeNav}>
            <Link to="brochure">Brochure</Link>
          </li>
          <li onClick={closeNav}>Gallery</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navabr;
