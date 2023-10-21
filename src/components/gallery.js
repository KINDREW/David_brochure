import "./gallery.css";
import one from "../asserts/20220102_192529-PHOTO_FRAME.jpg";
import two from "../asserts/20221007_170527-PHOTO_FRAME.jpg";
import three from "../asserts/IMG-20181002-WA0019-PHOTO_FRAME.jpg";
import four from "../asserts/IMG-20181021-WA0006-PHOTO_FRAME.jpg";
import five from "../asserts/IMG-20190512-WA0079-PHOTO_FRAME.jpg";
import six from "../asserts/IMG-20200308-WA0078-PHOTO_FRAME.jpg";
import seven from "../asserts/IMG-20220406-WA0011-PHOTO_FRAME.jpg";
import eight from "../asserts/20201031_132442-PHOTO_FRAME.jpg";
import nine from "../asserts/IMG-20201212-WA0019-PHOTO_FRAME.jpg";
import ten from "../asserts/20220307_210705-PHOTO_FRAME.jpg";
import leven from "../asserts/IMG-20190720-WA0082-PHOTO_FRAME.jpg";
import twel from "../asserts/_MG_9324-PHOTO_FRAME.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>How it started...</h1>
      <div className="started">
        <div className="lefttt">
          <img src={one} alt="" />
          <img src={four} alt="" />
          <img src={seven} alt="" />
          <img src={ten} alt="" />
        </div>
        <div className="middleeee">
          <img src={two} alt="" />
          <img src={five} alt="" />
          <img src={eight} alt="" />
          <img src={three} alt="" />
        </div>
        <div className="rightttttt">
          <img src={six} alt="" />
          <img src={nine} alt="" />
          <img src={leven} alt="" />
          <img src={twel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
