import "./background.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";

const Eightpage = () => {
  return (
    <div className="bg">
      <img className="wandecoal" src={back} alt="" />
      <img className="burnaboy" src={middle} alt="" />
      <img className="wizkid" src={front} alt="" />
      <div className="fireboy">
        <span class="subheading  nn xc">RECEPTION</span>
        <img class="underline" src={underline} alt="" />
        <span className="bruced">Our Story </span>
        <span className="bruced"> Toast</span>
        <span className="bruced"> Couple Games</span>
        <span className="bruced">Couple's First Dance </span>
        <span className="bruced">Vote of Thanks </span>
        <span className="bruced">Bouquet Throwing </span>
        <span className="bruced">CLosing Prayer </span>
        <span className="bruced">Couple's Exit</span>
        <span className="bruced">Recessional </span>
      </div>
    </div>
  );
};

export default Eightpage;
