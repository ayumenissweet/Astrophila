import { useState, useEffect } from "react";
import Map from "../components/Map";
import StrongStar from "../components/StrongStar";
import "../styles/Level.css";

const LEVEL_DATA = {
  1: {
    phrase: "LIBERTE",
    hiddenIndices: [1, 2, 4],
    hint: "The first word of the French national motto.",
    didYouKnow:
      "The Statue of Liberty was a gift from France to the US and its copper skin is only as thick as two pennies!",
    mapLetters: [
      { id: 1, char: "I", x: 250, y: 150 },
      { id: 2, char: "B", x: 600, y: 450 },
      { id: 3, char: "R", x: 900, y: 200 },
    ],
  },
  2: {
    phrase: "EUREKA",
    hiddenIndices: [0, 2, 3],
    hint: "A famous Greek shout meaning 'I have found it!'",
    didYouKnow:
      "Archimedes supposedly jumped out of his bathtub and ran through the streets naked after discovering his principle.",
    mapLetters: [
      { id: 1, char: "E", x: 300, y: 200 },
      { id: 2, char: "R", x: 750, y: 350 },
      { id: 3, char: "E", x: 450, y: 600 },
    ],
  },
  3: {
    phrase: "APOLLO",
    hiddenIndices: [0, 2, 4],
    hint: "The name of the famous missions that put humans on the moon.",
    didYouKnow:
      "The Apollo 11 computer was thousands of times less powerful than a modern smartphone.",
    mapLetters: [
      { id: 1, char: "A", x: 200, y: 500 },
      { id: 2, char: "O", x: 800, y: 150 },
      { id: 3, char: "L", x: 500, y: 400 },
    ],
  },
  4: {
    phrase: "GALAXIE",
    hiddenIndices: [1, 2, 4, 6],
    hint: "A massive system of stars, gas, and dust held together by gravity.",
    didYouKnow:
      "The Milky Way galaxy is moving through space at about 600 kilometers per second!",
    mapLetters: [
      { id: 1, char: "A", x: 150, y: 300 },
      { id: 2, char: "L", x: 850, y: 100 },
      { id: 3, char: "X", x: 400, y: 550 },
      { id: 4, char: "E", x: 700, y: 400 },
    ],
  },
  5: {
    phrase: "CE QUI NE SE PARTAGE PAS SE PERD",
    hiddenIndices: [4, 8, 14, 18, 22, 26, 29, 31],
    hint: "The official slogan for OMC, you know that... right?",
    didYouKnow:
      "OMC is a club where you can hone your skills, and more importantly : hone your social and soft skills!",
    mapLetters: [
      { id: 1, char: "U", x: 120, y: 150 },
      { id: 2, char: "E", x: 880, y: 420 },
      { id: 3, char: "A", x: 400, y: 580 },
      { id: 4, char: "G", x: 750, y: 180 },
      { id: 5, char: "A", x: 200, y: 450 },
      { id: 6, char: "E", x: 600, y: 350 },
      { id: 7, char: "E", x: 450, y: 100 },
      { id: 8, char: "D", x: 920, y: 550 },
    ],
  },
};

function Level({ level = 1, onBack }) {
  const [isWin, setIsWin] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [foundCount, setFoundCount] = useState(0);
  const [foundMapIndices, setFoundMapIndices] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [starPos, setStarPos] = useState({ x: 0, y: 0 });
  const [isStarFound, setIsStarFound] = useState(false);

  const currentLevelData = LEVEL_DATA[level] || LEVEL_DATA[1];
  const { phrase, hiddenIndices, mapLetters, hint, didYouKnow } =
    currentLevelData;

  const STAR_SIZE = 40; // width and height of the star

const maskString = isStarFound
  ? `radial-gradient(circle 70px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.5) 50%, black 100%), 
     radial-gradient(circle 120px at ${starPos.x + STAR_SIZE / 2}px ${starPos.y + STAR_SIZE / 2}px, transparent 0%, black 100%)`
  : `radial-gradient(circle 70px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.5) 50%, black 100%)`;

  useEffect(() => {
    setStarPos({
      x: Math.floor(Math.random() * 800) + 50,
      y: Math.floor(Math.random() * 400) + 50,
    });
    setIsStarFound(false);
    setShowHint(false);
    setFoundCount(0);
    setFoundMapIndices([]);
    setIsWin(false);
  }, [level]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleLetterClick = (clickedLetterObj, clickedMapIndex) => {
    const requiredChar = mapLetters[foundCount].char;

    if (clickedLetterObj.char === requiredChar) {
      const newCount = foundCount + 1;
      setFoundMapIndices([...foundMapIndices, clickedMapIndex]);
      setFoundCount(newCount);

      if (newCount === mapLetters.length) {
        setTimeout(() => setIsWin(true), 300);
      }
    }
  };

  const renderPhrase = () => {
    let globalIdx = 0;
    return phrase.split(" ").map((word, wIdx) => {
      const wordNode = (
        <div key={`word-${wIdx}`} className="word-group">
          {word.split("").map((char, cIdx) => {
            const currentIdx = globalIdx++;
            const isHidden = hiddenIndices.includes(currentIdx);
            const expectedPosition = hiddenIndices.indexOf(currentIdx);
            const isFound =
              expectedPosition !== -1 && expectedPosition < foundCount;

            if (isHidden && !isFound) {
              return <div key={cIdx} className="letter-box empty"></div>;
            }
            return (
              <div
                key={cIdx}
                className={`letter-box ${isFound ? "found" : ""}`}
              >
                {char}
              </div>
            );
          })}
        </div>
      );
      globalIdx++;
      return wordNode;
    });
  };

  return (
    <div className="level">
      <div className="level-left">
        <button
          className="back-btn sidebar-back"
          onClick={() => onBack("menu")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1>Level {level}</h1>
        <div className="sidebar-section">
          <h4 className="sidebar-label pink-label">Did you know?</h4>
          <p className="sidebar-info">{didYouKnow}</p>
        </div>
        <button
          className="btn-pink hint-btn"
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? "Hide Hint 💡" : "Get Hint 💡"}
        </button>
        <div className="sidebar-section mt-auto">
          <h4 className="sidebar-label">Tip</h4>
          <p className="sidebar-info">{showHint ? hint : "???"}</p>
        </div>
      </div>

      <div className="level-right">
        <div className="level-header-top">
          <h3>Find the missing letters</h3>
          <div className="phrase-container">{renderPhrase()}</div>
        </div>

        <div className="game-viewport" onMouseMove={handleMouseMove}>
          <div className="map-wrapper">
            <Map className="map" />

            <StrongStar
              x={starPos.x}
              y={starPos.y}
              isFound={isStarFound}
              onClick={() => setIsStarFound(true)}
            />

            {mapLetters.map((letter, index) => {
              if (foundMapIndices.includes(index)) return null;
              return (
                <div
                  key={letter.id}
                  className="map-letter"
                  style={{ left: letter.x, top: letter.y }}
                  onClick={() => handleLetterClick(letter, index)}
                >
                  <div className="map-letter-char">{letter.char}</div>
                </div>
              );
            })}
          </div>
          <div
  className="fog-bg"
  style={{
    maskImage: maskString,
    WebkitMaskImage: maskString,
    maskComposite: "intersect", 
    WebkitMaskComposite: "destination-in",
  }}
></div>
        </div>

        {isWin && (
          <div className="win-overlay">
            <div className="win-modal">
              <h2 className="win-title">
                {level === 5 ? "True Omc Member" : "You Won!"}
              </h2>
              <p className="win-text">You completed level {level}</p>
              <div className="win-buttons">
                {level < 5 ? (
                  <button
                    className="btn-pink"
                    onClick={() => {
                      setIsWin(false);
                      onBack("next");
                    }}
                  >
                    Next Level
                  </button>
                ) : (
                  <button className="btn-pink" onClick={() => onBack("menu")}>
                    Finish Game 🎉
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Level;
