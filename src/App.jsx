// src/App.jsx
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import MainWarns from "./components/MainWarns";
import LevelSelect from "./components/LevelSelect";
import Tutorial from "./components/Tutorial";
import Level from "./pages/Level";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [unlockedLevels, setUnlockedLevels] = useState([1]);

  const handleLevelUnlock = (nextLevel) => {
    setUnlockedLevels((prev) =>
      prev.includes(nextLevel) ? prev : [...prev, nextLevel],
    );
  };

  return (
    <div className="app">
      {/* Background & Particles (Keep these here so they persist across pages) */}
      <div className="stars-bg"></div>
      <div className="glow-orb glow-orb--1"></div>
      <div className="particle particle--1"></div>

      <Routes>
        <Route path="/" element={<Home onStart={() => navigate("/warns")} />} />

        <Route
          path="/warns"
          element={<MainWarns onProceed={() => navigate("/levels")} />}
        />

        <Route
          path="/levels"
          element={
            <LevelSelect
              onHome={() => navigate("/")}
              onTutorial={() => navigate("/tutorial")}
              onSelectLevel={(num) => navigate(`/level/${num}`)}
              unlockedLevels={unlockedLevels}
            />
          }
        />

        <Route
          path="/tutorial"
          element={<Tutorial onBack={() => navigate("/levels")} />}
        />

        <Route
          path="/level/:id"
          element={
            <LevelWrapper
              onUnlock={handleLevelUnlock}
              onBack={() => navigate("/levels")}
            />
          }
        />
      </Routes>
    </div>
  );
}

// Small wrapper to extract the ID from the URL and pass it to Level
import { useParams } from "react-router-dom";
function LevelWrapper({ onUnlock, onBack }) {
  const { id } = useParams();
  const levelNum = parseInt(id);

  return (
    <Level
      key={levelNum}
      level={levelNum}
      onBack={(action) => {
        if (action === "next") {
          onUnlock(levelNum + 1);
          onBack(); // Go back to level select or you could navigate directly to levelNum + 1
        } else {
          onBack();
        }
      }}
    />
  );
}

export default App;
