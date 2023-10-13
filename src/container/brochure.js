import FirstPage from "../components/firstpage";
import SecondPage from "../components/secondpage";
import "../components/navbar";
import Third from "../components/third";
import Background from "../components/background";

const Brochure = () => {
  return (
    <div className="brochure">
      <FirstPage />
      <Third />
      <Background />
    </div>
  );
};

export default Brochure;
