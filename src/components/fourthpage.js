import "./background.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";

const Fourthpage = () => {
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
        <span className="bruce">1. Processional Hymn - MHB 444 </span>
        <span className="bruce">2. Opening Sentences </span>
        <span className="bruce">3. Hymn - MHB 774 </span>
        <span className="bruce">4. Prayer plus the Lord’s Prayer </span>
        <span className="bruce">5. Declaration of Purpose </span>
        <span className="bruce">6. Hymn - MHB 400 </span>
        <span className="bruce">7. The Legal Declaration/Vows </span>
        <span className="bruce">8. Hymn of Dedication - MHB 516 </span>
        <span className="bruce">9. Marital Dedication/Giving of Rings </span>
        <span className="bruce">10. Pronouncement of Marriage </span>
        <span className="bruce">11. Blessing of the Marriage </span>
      </div>
    </div>
  );
};

export default Fourthpage;
