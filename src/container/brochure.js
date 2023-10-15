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

const Brochure = () => {
  return (
    <div className="brochure">
      <FirstPage />
      <SecondPage />
      <Thirdpage />
      <Fourthpage />
      <Fifthpage />
      <Ninthpage />
      <Tenth />
      <Sixthpage />
      <Seventhpage />
      <Eightpage />
    </div>
  );
};

export default Brochure;
