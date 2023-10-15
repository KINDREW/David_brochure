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
          <span className="biggie" style={{ paddingTop: "20px" }}>
            Where
          </span>
          <span>Trinity Methodist Church Kwadaso Estate, Kumasi</span>
          <span style={{ textDecoration: "underline", paddingTop: "10px" }}>
            <a href="https://maps.google.com/maps?q=6.6888394713528285%2C-1.6491508483886719&z=17&hl=en">
              View Map
            </a>
          </span>
          <br />
          <br />
          <span className="biggie">Reception</span>
          <span>424 A, Kwadaso Estate </span>
          <span>
            Digital Address: AK-226-2249 <br />
            <br />
            <a
              style={{ textDecoration: "underline", marginTop: "10px" }}
              href="#"
            >
              View Map
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
