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
        <span class="subheading  nn xc">RECEPTION</span>
        <img class="underline" src={underline} alt="" />
        <span class="content">
          <strong> HOST </strong> <br />{" "}
        </span>
        <span class="bru">Michael Asare Boadu</span>
        <span class="content">
          <strong>PARENTS OF THE BRIDE</strong>
        </span>
        <span class="bru">Anthony Mensah & Vivian Asabere</span>
        <span class="content">
          <strong> PARENTS OF THE GROoM </strong>
        </span>
        <span class="bru">Sylvia Afful (Mrs.)</span>
        <span class="content">
          <strong>BRIDES MAIDS</strong>
        </span>
        <span className="bru">Alicia Iris Smith</span>
        <span className="bru">Juvy T. Smith</span>
        <span class="content">
          <strong>GROOMS MEN</strong>
        </span>
        <span class="bru">Harold O. Berkshire </span>
        <span className="bru">James S. Sifonn</span>
        <span className="bru">Peter P. Norwester</span>
        <span class="content">
          <strong>MAID OF HONOR</strong>
        </span>
        <span class="bru"> Maud Adu</span>
        <span class="content">
          <strong>BESTMAN</strong>
        </span>
        <span class="bru">Maxwel Mantey</span>
      </div>
    </div>
  );
};

export default Sixthpage;
