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
          <span>Saturday, Oct 21, 2023</span>
          <span>Wedding Ceremony: 11:30am</span>
        </div>
        <div className="location1">
          <span className="biggie" style={{ paddingTop: "20px" }}>
            Where
          </span>
          <span>Trinity Methodist Church Kwadaso Estate, Kumasi</span>
          <span>
            <a
              style={{ textDecoration: "underline", marginTop: "10px" }}
              href="https://maps.google.com/maps?q=6.6888394713528285%2C-1.6491508483886719&z=17&hl=en"
            >
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
              href="https://maps.google.com/maps?q=6.686772240091932%2C-1.6489684581756592&z=17&hl=en"
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
