import "./background.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";

const Thirdpage = () => {
  return (
    <div className="bg">
      <img className="wandecoal" src={back} alt="" />
      <img className="burnaboy" src={middle} alt="" />
      <img className="wizkid" src={front} alt="" />
      <div className="fireboy">
       
        <span class="subheading  nn ">
          Officiating <br /> Ministers
        </span>
        <img class="underline pp" src={underline} alt="" />
        <p class="content1 oi" style={{ textTransform: "capitalize" }}>
          <span>Rt. Rev. Hayford Aduse-Poku </span> <br />
          <small className="yus">(SUPT. MINISTER, KWADASO CIRCUIT)</small>
          <br />
          <span>V/Rev. Grace Doodo</span>
          <br /> <small>(CIRCUIT MINISTER)</small>
          <br />
          <span>V/Rev. Christian E. Denteh</span>
          <br />
          <small>(SUPERNUMERAY MINISTER, KWADASO)</small> <br />
          <span>Rev. Gaius Takyi Adjei</span>
          <br />
          <small>(CIRCUIT MINISTER)</small>
          <br />
          <span>Rev. Leslie W.K.M. Bedu</span>
          <br /> <small>(CIRCUIT MINISTER)</small>
          <br />
          <span>Rev. Dr. William Godman Nyarko</span>
          <br />
          <small>(CIRCUIT MINISTER)</small>
          <br />
          <span>Rev. Solomon Anum-Doku</span>
          <br /> <small>(CIRCUIT MINISTER)</small>
        </p>
      </div>
    </div>
  );
};

export default Thirdpage;
