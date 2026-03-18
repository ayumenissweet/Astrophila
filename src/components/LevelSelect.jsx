import { useState } from "react";

function LevelSelect({ onHome, onTutorial, selectedLevel, onSelectLevel }) {
  const [localSelected, setLocalSelected] = useState(selectedLevel);

  const handleLevelClick = (num) => {
    setLocalSelected(num);
    // Delay routing so the user can see the color change on click
    setTimeout(() => {
      onSelectLevel(num);
    }, 400);
  };

  return (
    <div className="levels-page">
      {/* Navbar en haut à DROITE */}
      <nav className="navbar">
        <span className="nav-link" onClick={onHome}>
          Home
        </span>
        <span className="nav-link active">Levels</span>
        <span className="nav-link">Credits</span>
      </nav>

      {/* Contenu centré */}
      <div className="levels-content">
        <h2 className="level-title" style={{ color: "white" }}>
          Select A Level
        </h2>

        <div className="level-buttons">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`level-btn ${localSelected === num ? "selected" : ""}`}
              onClick={() => handleLevelClick(num)}
              style={{ animationDelay: `${0.1 + num * 0.15}s` }}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Bouton en bas à DROITE */}
      <div className="levels-footer">
        <button
          className="btn-pink btn-outline"
          style={{ background: "#ff42ab", border: "none", color: "white" }}
          onClick={onTutorial}
        >
          Check Tutorial
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A6 6 0 1 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default LevelSelect;
