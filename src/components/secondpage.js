import "./background.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";

const SecondPage = () => {
  return (
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
  );
};

export default SecondPage;
