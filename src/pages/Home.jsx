import { useState } from "react";
import "../styles/Home.css";

import miniStarIcon from "../assets/miniStar.svg";
import starIcon from "../assets/star.svg";
import divider from "../assets/divider.svg";
import mascotGirl from "../assets/sweetie.png";

function Home({ onStart }) {
  const [username, setUsername] = useState("");

  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-title">
          <h1>Astrophila</h1>
          <img src={miniStarIcon} alt="star" />
        </div>
        <p>
          Your Cosmic Adventure Begins! Explore in a world full of stars... and
          Aliens!
        </p>
        <div className="divider">
          <div className="divider-line"></div>
          <img src={divider} alt="divider" />
          <div className="divider-line"></div>
        </div>
        <h2>
          Hello, <span className="hero-user"> {username}</span>
        </h2>

        <label className="hero-input">
          Enter Your Name:
          <input
            name="username"
            value={username}
            placeholder="Your Astronaut Name..."
            maxLength="16"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <button
          className="btn-pink"
          style={{
            alignSelf: "flex-start",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
          }}
          onClick={onStart}
        >
          <span>Start Stargazing</span>
          <img
            src={starIcon}
            alt="star"
            style={{ width: "18px", filter: "brightness(0) invert(1)" }}
          />
        </button>
      </div>

      <div className="hero-right">
        <img className="hero-character" src={mascotGirl} alt="astronaut girl" />
      </div>
    </div>
  );
}

export default Home;
