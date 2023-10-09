import "./details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="weddingday">
        <h5>
          The <br />
          wedding <br />
          day
        </h5>
      </div>

      <div className="location">
        <div className="location1">
          <span className="biggie">When</span>
          <span>Saturday, Oct 23, 2023</span>
          <span>Wedding Ceremony: 10:00pm</span>
          <span>Wedding Reception: 12:00pm</span>
        </div>
        <div className="location1">
          <span className="biggie">Where</span>
          <span>Kwadaso....</span>
          <span>
            123 avenue <a href="#">View Map</a>
          </span>
          <br />
          <br />
          <span className="biggie">Where</span>
          <span>Kwadaso....</span>
          <span>
            123 avenue <a href="#">View Map</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
