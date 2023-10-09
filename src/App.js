import "./App.css";
import Navabr from "./components/navbar";
import Brochure from "./container/brochure";
import Details from "./container/details";
import Home from "./container/home";
import Party from "./container/letsparty";
import OurStory from "./container/ourstory";
import { Link as ScrollLink, Element } from "react-scroll";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navabr />

      <Element name="home">
        <Home />
      </Element>

      <Brochure />
    </div>
  );
}

export default App;
