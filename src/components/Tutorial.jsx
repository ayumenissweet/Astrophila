function Tutorial({ onBack }) {
  return (
    <div className="tutorial-page">
      <button
        className="back-btn"
        onClick={onBack}
        style={{ padding: 0, margin: 0 }}
      >
        <svg
          width="32"
          height="32"
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

      <div className="tutorial-content">
        <div className="tutorial-cards">
          <div className="tutorial-card" style={{ animationDelay: "0.1s" }}>
            <div className="tutorial-icon">
              <svg
                width="80"
                height="80"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="27" cy="27" r="16" />
                <line x1="39" y1="39" x2="56" y2="56" />
                <circle cx="22" cy="22" r="4" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <p className="tutorial-text">
              Your mouse cursor reveals what's beneath
            </p>
          </div>

          <div className="tutorial-card" style={{ animationDelay: "0.25s" }}>
            <div className="tutorial-icon">
              <svg
                width="80"
                height="80"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="32,8 37,24 54,24 40,34 45,50 32,40 19,50 24,34 10,24 27,24" />
                <line x1="32" y1="2" x2="32" y2="6" />
                <line x1="54" y1="10" x2="51" y2="13" />
                <line x1="58" y1="32" x2="54" y2="32" />
              </svg>
            </div>
            <p className="tutorial-text">
              Clicking unlit stars will{" "}
              <span className="highlight">reveal hidden areas</span> and unlock
              letters
            </p>
          </div>

          <div className="tutorial-card" style={{ animationDelay: "0.4s" }}>
            <div className="tutorial-icon">
              <svg
                width="80"
                height="80"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ellipse cx="32" cy="28" rx="22" ry="8" />
                <path d="M20 28 Q20 16 32 16 Q44 16 44 28" />
                <line x1="24" y1="36" x2="22" y2="46" />
                <line x1="32" y1="36" x2="32" y2="48" />
                <line x1="40" y1="36" x2="42" y2="46" />
                <circle cx="32" cy="24" r="4" />
              </svg>
            </div>
            <p className="tutorial-text">
              You must find the lettees needed in the order!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
