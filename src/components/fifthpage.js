import "./background.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";

const Fifthpage = () => {
  return (
    <div className="bg">
      <img className="wandecoal" src={back} alt="" />
      <img className="burnaboy" src={middle} alt="" />
      <img className="wizkid" src={front} alt="" />
      <div className="fireboy">
        <span class="subheading  nn xc">
          Order Of <br /> Service
        </span>
        <img class="underline" src={underline} alt="" />
        <span className="bruce">12. Hymn - MHB 777 </span>
        <span className="bruce">
          13. Ministry of the Word: <br />❖ Ephesians 5:22-31 ❖ John 2:1-11
        </span>
        <span className="bruce">14. Anthem - Church Choir </span>
        <span className="bruce">15. Sermon </span>
        <span className="bruce">16. Holy Communion </span>
        <span className="bruce">17. 1st Offertory </span>
        <span className="bruce">18. Signing of Certificate </span>
        <span className="bruce">19. 2nd Offertory</span>
        <span className="bruce">20. Notices/Presentation of Certificate </span>
        <span className="bruce">21. Closing Hymn - MHB 313 </span>
        <span className="bruce km">22. Benediction/Bridal March </span>
      </div>
    </div>
  );
};

export default Fifthpage;
