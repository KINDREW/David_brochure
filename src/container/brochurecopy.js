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
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";
import "./brochure.css";

const BrochureCopy = () => {
  return (
    <div className="brochure">
      <div className="firstpage">
        <div className="firstright">
          <div className="rightTop">
            <span>David</span>
            <span>&</span>
            <span>Nana Yaa</span>
          </div>
          <p className="rightmid">We welcome you to our wedding</p>
          <div className="rightbottom">
            <span>21</span>
            <span>|</span>
            <span>10</span>
            <span>|</span>
            <span>23</span>
          </div>
        </div>
      </div>
      <div className="bg">
        <img className="wandecoal" src={back} alt="" />
        <img className="burnaboy" src={middle} alt="" />
        <img className="wizkid" src={front} alt="" />
        <div className="fireboy">
          <span class="heading">Details</span>
          <img class="underline" src={underline} alt="" />
          <span class="subheading">ceremony</span>
          <p class="content1">
            Trinity Methodist Church <br />
            Kwadaso Estate,Kumasi
          </p>

          <span class="subheading">reception</span>
          <p class="content1">
            424 A, Kwadaso Estate <br />
            Digital Address: AK-226-2249
          </p>

          <span class="subheading rsvp">RSVP</span>
          <p class="content1">
            Maame Serwaa - 0504712906 <br />
            Ella Asabere - 0541476590
          </p>
        </div>
      </div>
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

      <Fourthpage />
      <Fifthpage />
      {/* <Ninthpage />
      <Tenth /> */}
      <Sixthpage />
      <Seventhpage />
      <Eightpage />
    </div>
  );
};

export default BrochureCopy;
