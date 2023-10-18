import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";

const Credits = () => {
  return (
    <div className="credits">
      <div className="bg">
        <img className="wandecoal" src={back} alt="" />
        <img className="burnaboy" src={middle} alt="" />
        <img className="wizkid" src={front} alt="" />
        <div className="fireboy">
          <span class="subheading pop  nn">CREDITS</span>
          <img class="underline" src={underline} alt="" />
          <span class="content" style={{ marginTop: "20px" }}>
            <strong> Bride's Makeup </strong> <br />
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Annie's Beauty
          </span>
          <span class="content" style={{ marginTop: "20px" }}>
            <strong>Bride's Gown</strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Poks Vocation Institute
          </span>
          <span class="content " style={{ marginTop: "20px" }}>
            <strong> Traditional wear </strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Sherly Shane
          </span>

          <span class="content" style={{ marginTop: "20px" }}>
            <strong>Decor</strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Lovely Baby
          </span>
          <span class="content" style={{ marginTop: "20px" }}>
            <strong>Photography</strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Sarboat Photography
          </span>
          <span class="content" style={{ marginTop: "20px" }}>
            <strong>Cake</strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Providentia Cakes
          </span>
          <span class="content" style={{ marginTop: "20px" }}>
            <strong>Catering</strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Chef Prince
          </span>
        </div>
      </div>
    </div>
  );
};

export default Credits;
