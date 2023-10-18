import "./background.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";

const Seventhpage = () => {
  return (
    <div className="bg">
      <img className="wandecoal" src={back} alt="" />
      <img className="burnaboy" src={middle} alt="" />
      <img className="wizkid" src={front} alt="" />
      <div className="fireboy">
        <span class="subheading  nn xc">RECEPTION</span>
        <img class="underline" src={underline} alt="" />
        <span className="bruced">Arrival of Guest </span>
        <span className="bruced"> Opening Prayer</span>
        <span className="bruced">Welcome Address </span>
        <span className="bruced">Cocktails Served </span>
        <span className="bruced">Music Interlude </span>
        <span className="bruced">Bridal Train Entry </span>
        <span className="bruced">Bride & Groom Entry </span>
        <span className="bruced">Main Meal Served</span>
        <span className="bruced" style={{ marginTop: "0px" }}>
          Cutting of Cake
        </span>
      </div>
    </div>
  );
};

export default Seventhpage;
