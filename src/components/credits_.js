import back from "../asserts/030.jpg";
import front from "../asserts/0101.png";
import middle from "../asserts/0202.png";
import underline from "../asserts/Screenshot 2023-10-08 085433.png";

const Credits2 = () => {
  return (
    <div className="credits">
      <div className="bg">
        <img className="wandecoal" src={back} alt="" />
        <img className="burnaboy" src={middle} alt="" />

        <img className="wizkid" src={front} alt="" />
        <div className="fireboy">
          <span class="subheading lkl">CREDITS</span>
          <img class="underline" src={underline} alt="" />

          <span class="content" style={{ marginTop: "15px" }}>
            <strong>Photography</strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Sarboat Photography
          </span>
          <span class="content" style={{ marginTop: "15px" }}>
            <strong>Cake</strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Providentia Cakes
          </span>
          <span class="content" style={{ marginTop: "15px" }}>
            <strong>Catering</strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Chef Prince
          </span>
          <span class="content" style={{ marginTop: "15px" }}>
            <strong>Publicity</strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Xpress Advertising Agency
          </span>
          <span class="content" style={{ marginTop: "15px" }}>
            <strong>Web Development</strong>
          </span>
          <span class="bru" style={{ fontSize: "18px" }}>
            Andrew✌🏾
          </span>
        </div>
      </div>
    </div>
  );
};

export default Credits2;
