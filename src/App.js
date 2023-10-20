import "./App.css";
import Navabr from "./components/navbar";
import Brochure from "./container/brochure";
import Home from "./container/home";
import { Link as ScrollLink, Element } from "react-scroll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./components/gallery";

function App() {
  return (
    <Router>
      <div className="App">
        <Navabr />
        <Switch>
          <Route exact path="/">
            <Element name="home">
              <Home />
            </Element>
          </Route>
          <Route path="/brochure">
            <Brochure />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
