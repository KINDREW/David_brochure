import "./background.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";

const Sixthpage = () => {
  return (
    <div className="bg">
      <img className="wandecoal" src={back} alt="" />
      <img className="burnaboy" src={middle} alt="" />
      <img className="wizkid" src={front} alt="" />
      <div className="fireboy">
        <span class="subheading pop  nn">RECEPTION</span>
        <img class="underline" src={underline} alt="" />
        <span class="content" style={{ marginTop: "20px" }}>
          <strong> HOST </strong> <br />
        </span>
        <span class="bru" style={{ fontSize: "18px" }}>
          Joseph Kumi
        </span>
        <span class="content" style={{ marginTop: "20px" }}>
          <strong>PARENTS OF THE BRIDE</strong>
        </span>
        <span class="bru" style={{ fontSize: "18px" }}>
          Anthony Mensah & Vivian Asabere
        </span>
        <span class="content " style={{ marginTop: "20px" }}>
          <strong> PARENTS OF THE GROoM </strong>
        </span>
        <span class="bru" style={{ fontSize: "18px" }}>
          Sylvia Afful (Mrs.)
        </span>

        <span class="content" style={{ marginTop: "20px" }}>
          <strong>MAID OF HONOR</strong>
        </span>
        <span class="bru" style={{ fontSize: "18px" }}>
          Maud Adu
        </span>
        <span class="content" style={{ marginTop: "20px" }}>
          <strong>BESTMAN</strong>
        </span>
        <span class="bru" style={{ fontSize: "18px" }}>
          Maxwel Mantey
        </span>
      </div>
    </div>
  );
};

export default Sixthpage;
