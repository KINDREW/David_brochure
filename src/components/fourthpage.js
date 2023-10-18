import "./background.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";

const Fourthpage = () => {
  return (
    <div className="bg">
      <img className="wandecoal" src={back} alt="" />
      <img className="burnaboy" src={middle} alt="" />
      <img className="wizkid" src={front} alt="" />
      <div className="fireboy">
        <span class="subheading">
          Order Of <br /> Service
        </span>
        <img class="underline" src={underline} alt="" />
        <span className="bruce"> Processional Hymn - MHB 444 </span>
        <span className="bruce"> Opening Sentences </span>
        <span className="bruce"> Hymn - MHB 64 </span>
        <span className="bruce"> Prayer plus the Lord’s Prayer </span>
        <span className="bruce"> Declaration of Purpose </span>
        <span className="bruce"> Hymn - MHB 400 / MHB 774 </span>
        <span className="bruce"> The Legal Declaration/Vows </span>
        <span className="bruce"> Hymn of Dedication - MHB 516 </span>
        <span className="bruce"> Marital Dedication/Giving of Rings </span>
        <span className="bruce"> Pronouncement of Marriage </span>
        <span className="bruce"> Blessing of the Marriage </span>
      </div>
    </div>
  );
};

export default Fourthpage;
