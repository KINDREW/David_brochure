import "./background.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";

const Tenth = () => {
  return (
    <div className="bg">
      <img className="wandecoal" src={back} alt="" />
      <img className="burnaboy" src={middle} alt="" />
      <img className="wizkid" src={front} alt="" />
      <div className="joeboy">
        <span class="subheading  nn xc">MHB 777</span>
        <img class="underline" src={underline} alt="" />

        <p className="brucep">
          3 <br /> Grant them the joy which brightens earthly sorrow; grant them
          the peace which calms all earthly strife; grant them the vision of the
          glorious morrow that will reveal eternal love and life.
        </p>
      </div>
    </div>
  );
};

export default Tenth;
