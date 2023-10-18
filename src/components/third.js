import "./third.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";

const Third = () => {
  return (
    <div className="pro">
      <div className="fff">
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

export default Third;
