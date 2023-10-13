import Eightpage from "../components/eightpage";
import Fifthpage from "../components/fifthpage";
import FirstPage from "../components/firstpage";
import Fourthpage from "../components/fourthpage";

import "../components/navbar";
import SecondPage from "../components/secondpage";
import Seventhpage from "../components/seventhpage";
import Sixthpage from "../components/sixthpage";
import Thirdpage from "../components/thirdpage";

const Brochure = () => {
  return (
    <div className="brochure">
      <FirstPage />
      <SecondPage />
      <Thirdpage />
      <Fourthpage />
      <Fifthpage />
      <Sixthpage />
      <Seventhpage />
      <Eightpage />
    </div>
  );
};

export default Brochure;
