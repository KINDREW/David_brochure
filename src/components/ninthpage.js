import "./background.css";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";
import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";

const Ninthpage = () => {
  return (
    <div className="bg">
      <img className="wandecoal" src={back} alt="" />
      <img className="burnaboy" src={middle} alt="" />
      <img className="wizkid" src={front} alt="" />
      <div className="joeboy">
        <span class="subheading  nn xc">MHB 777</span>
        <img class="underline" src={underline} alt="" />

        <p className="brucep">
          1 <br />O perfect Love, all human thought transcending, lowly we kneel
          in prayer before thy throne, that theirs may be the love which knows
          no ending, whom thou in sacred vow dost join in one.
        </p>

        <p className="brucep">
          2 <br /> O perfect Life, be thou their full assurance of tender
          charity and steadfast faith, of patient hope and quiet, brave
          endurance, with childlike trust that fears no pain or death.2 O
          perfect Life, be thou their full assurance of tender charity and
          steadfast faith, of patient hope and quiet, brave endurance, with
          childlike trust that fears no pain or death.
        </p>
      </div>
    </div>
  );
};

export default Ninthpage;
