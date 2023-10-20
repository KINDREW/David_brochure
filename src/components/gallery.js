import "./gallery.css";
import going from "../asserts/IMG-20181002-WA0019-COLLAGE.jpg";
import gone from "../asserts/IMG-20181002-WA0019-PHOTO_FRAME.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="started">
        <h1>How it started</h1>
        <img src={going} alt="" />
      </div>
      <div className="going">
        <h1>How it is going...</h1>
        <img src={gone} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
