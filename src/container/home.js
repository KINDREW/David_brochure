import Details from "./details";
import "./home.css";
import Party from "./letsparty";
import { Link as ScrollLink, Element } from "react-scroll";
import OurStory from "./ourstory";

const Home = () => {
  return (
    <div className="home">
      <div className="yie">
        <span className="names">David & Nana Yaa</span>
        <span className="getting">Are Getting Married</span>
      </div>

      <Element name="ourstory">
        <OurStory />
      </Element>
      <Element name="details">
        <Details />
      </Element>
      <Party />
    </div>
  );
};

export default Home;
