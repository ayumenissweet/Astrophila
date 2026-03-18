// src/components/LevelSelect.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // Added for the Navbar

function LevelSelect({ onHome, onTutorial, onSelectLevel, unlockedLevels }) {
  const [localSelected, setLocalSelected] = useState(null);

  const handleLevelClick = (num) => {
    if (!unlockedLevels.includes(num)) return; // Logic check

    setLocalSelected(num);
    setTimeout(() => {
      onSelectLevel(num);
    }, 400);
  };

  return (
    <div className="levels-page">
      <nav className="navbar">
        {/* Using Links instead of spans makes it more accessible */}
        <Link to="/" className="nav-link">
          Home
        </Link>
        <span className="nav-link active">Levels</span>
        <span className="nav-link">Credits</span>
      </nav>

      <div className="levels-content">
        <h2 className="level-title" style={{ color: "white" }}>
          Select A Level
        </h2>
        <div className="level-buttons">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              disabled={!unlockedLevels.includes(num)}
              className={`level-btn ${localSelected === num ? "selected" : ""} ${!unlockedLevels.includes(num) ? "locked" : ""}`}
              onClick={() => handleLevelClick(num)}
              style={{ animationDelay: `${0.1 + num * 0.15}s` }}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="levels-footer">
        <button className="btn-pink btn-outline" onClick={onTutorial}>
          Check Tutorial
        </button>
      </div>
    </div>
  );
}

export default LevelSelect;
