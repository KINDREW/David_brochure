import "./gallery.css";
import one from "../asserts/20220102_192529-PHOTO_FRAME.jpg";
import two from "../asserts/20221007_170527-PHOTO_FRAME.jpg";
import three from "../asserts/IMG-20181002-WA0019-PHOTO_FRAME.jpg";
import four from "../asserts/IMG-20181021-WA0006-PHOTO_FRAME.jpg";
import five from "../asserts/IMG-20190512-WA0079-PHOTO_FRAME.jpg";
import six from "../asserts/IMG-20200308-WA0078-PHOTO_FRAME.jpg";
import seven from "../asserts/IMG-20220406-WA0011-PHOTO_FRAME.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="started">
        <h1>How it started...</h1>
        <div className="lefttt">
          <img src={one} alt="" />
          <img src={four} alt="" />
        </div>
        <div className="middleeee">
          <img src={two} alt="" />
          <img src={five} alt="" />
        </div>
        <div className="rightttttt">
          <img src={three} alt="" />
          <img src={six} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
