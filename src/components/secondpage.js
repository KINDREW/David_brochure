import "./secondpage.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";

const SecondPage = () => {
  return (
    <div className="secondpage">
      <div className="secondLeft">
        <div className="image"></div>
        <div className="image1"></div>
        <div className="image2"></div>
        <div className="line"></div>
      </div>
      <div className="secondRight">
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

        <span class="subheading">RSVP</span>
        <p class="content1">
          Maame Serwaa - 0504712906 <br />
          Ella Asabere - 0541476590
        </p>
      </div>
    </div>
  );
};

export default SecondPage;
