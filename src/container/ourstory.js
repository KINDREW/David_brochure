import "./ourstory.css";
import slide from "../asserts/WhatsApp Image 2023-09-11 at 4.51.24 PM.jpeg";
import slide1 from "../asserts/WhatsApp Image 2023-10-14 at 8.27.15 AM.jpeg";
import slide2 from "../asserts/WhatsApp Image 2023-10-15 at 2.56.51 PM.jpeg";
import slide3 from "../asserts/WhatsApp Image 2023-10-15 at 2.56.54 PM (1).jpeg";
import slide4 from "../asserts/WhatsApp Image 2023-10-15 at 2.56.54 PM.jpeg";
const OurStory = () => {
  return (
    <div className="ourstory">
      <h1>She said yes</h1>
      <p>
        <p style={{ fontStyle: "italic" }}>
          "I don't know where I'd be without you here with me. Life with you
          makes perfect sense."
        </p>
        <span className="braT">- Tim McGraw</span>
      </p>

      <div className="slide">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={slide} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={slide1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={slide2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={slide3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={slide4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
