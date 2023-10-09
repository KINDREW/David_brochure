import "./App.css";
import Navabr from "./components/navbar";
import Brochure from "./container/brochure";
import Home from "./container/home";
import { Link as ScrollLink, Element } from "react-scroll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navabr />

        <Switch>
          <Element name="home">
            <Route exact path="/">
              <Home />
            </Route>
          </Element>

          <Route path="/brochure">
            <Brochure />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
