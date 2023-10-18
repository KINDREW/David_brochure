import Eightpage from "../components/eightpage";
import Fifthpage from "../components/fifthpage";
import FirstPage from "../components/firstpage";
import Fourthpage from "../components/fourthpage";
import "./brochure.js";
import "../components/navbar";
import SecondPage from "../components/secondpage";
import Seventhpage from "../components/seventhpage";
import Sixthpage from "../components/sixthpage";
import Thirdpage from "../components/thirdpage";
import Ninthpage from "../components/ninthpage";
import Tenth from "../components/tenthpage";
import "./brochure.css";
import Credits from "../components/credits";

const Brochure = () => {
  return (
    <div className="brochure">
      <FirstPage />
      <div className="pages">
        <div className="ml">
          <SecondPage />
        </div>
        <div className="lm">
          <Thirdpage />
        </div>
      </div>
      <div className="pages">
        <div>
          <Fourthpage />
        </div>
        <div className="lm">
          <Fifthpage />
        </div>
      </div>

      <div className="pages">
        <div>
          <Sixthpage />
        </div>
        <div className="lm">
          <Seventhpage />
        </div>
      </div>
      <div className="pages">
        <div>
          <Eightpage />
        </div>
        <div className="lm">
          <Credits />
        </div>
      </div>
    </div>
  );
};

export default Brochure;
