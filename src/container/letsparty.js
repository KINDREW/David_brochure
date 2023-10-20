import "./letsparty.css";
import Confetti from "canvas-confetti";
import { Link } from "react-router-dom";

const Party = () => {
  const handleFireConfetti = () => {
    const duration = 10 * 1000; // Duration of the confetti animation in milliseconds

    // Configure the confetti settings
    const config = {
      particleCount: 200, // Number of confetti particles
      spread: 160, // Spread of the particles
      colors: ["#FF0000", "#00FF00", "#0000FF"], // Colors of the confetti
    };

    // Fire the confetti animation
    Confetti(config, { duration });
  };

  return (
    <div className="party">
      <h5>Let's Party</h5>
      <Link to="/brochure">
        <span>Click here for event brochure</span>
      </Link>
      <button onClick={handleFireConfetti}>Ayefrow ooo!!!!</button>
    </div>
  );
};

export default Party;
