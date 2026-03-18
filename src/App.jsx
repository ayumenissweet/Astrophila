// src/App.jsx
import { useState } from "react";
import Home from "./pages/Home";
import MainWarns from "./components/MainWarns";
import LevelSelect from "./components/LevelSelect";
import Tutorial from "./components/Tutorial";
import Level from "./pages/Level";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [niveau, setNiveau] = useState(null);
  const [unlockedLevels, setUnlockedLevels] = useState([1]);

  const handleStartLevel = (num) => {
    if (!unlockedLevels.includes(num)) return; // block locked levels

    setNiveau(num);
    setPage("game");
  };

  return (
    <div className="app">
      {/* Background pattern */}
      <div className="stars-bg"></div>

      {/* Ambient glow orbs */}
      <div className="glow-orb glow-orb--1"></div>
      <div className="glow-orb glow-orb--2"></div>
      <div className="glow-orb glow-orb--3"></div>

      {/* Floating particles */}
      <div className="particle particle--1"></div>
      <div className="particle particle--2"></div>
      <div className="particle particle--3"></div>
      <div className="particle particle--4"></div>
      <div className="particle particle--5"></div>
      <div className="particle particle--6"></div>

      {/* Pages */}
      {page === "home" && <Home onStart={() => setPage("warns")} />}
      {page === "warns" && <MainWarns onProceed={() => setPage("levels")} />}
      {page === "levels" && (
        <LevelSelect
          onHome={() => setPage("home")}
          onTutorial={() => setPage("tutorial")}
          selectedLevel={niveau}
          onSelectLevel={handleStartLevel}
          unlockedLevels={unlockedLevels}
        />
      )}
      {page === "tutorial" && <Tutorial onBack={() => setPage("levels")} />}
      {page === "game" && niveau && (
        <Level
          key={niveau}
          level={niveau}
          onBack={(action) => {
            if (action === "next") {
              const nextLevel = niveau + 1;

              // Unlock next level if not already unlocked
              setUnlockedLevels((prev) =>
                prev.includes(nextLevel) ? prev : [...prev, nextLevel],
              );

              setNiveau(nextLevel);
            } else {
              setPage("levels");
            }
          }}
        />
      )}
    </div>
  );
}

export default App;
