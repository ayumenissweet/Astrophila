function MainWarns({ onProceed }) {
  return (
    <div className="warns-page">

      <div className="warn-cards">

        <div className="warn-card" style={{ animationDelay: '0.1s' }}>
          <div className="warn-icon">
            <svg width="90" height="90" viewBox="0 0 64 64" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="18" y="8"  width="28" height="44" rx="14"/>
              <line x1="32" y1="8"  x2="32" y2="26"/>
              <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none"/>
              {/* fil de la souris */}
              <path d="M32 52 Q44 58 48 48" fill="none"/>
            </svg>
          </div>
          <p className="warn-text">This game is only<br/>playable with a mouse</p>
        </div>

        <div className="warn-card" style={{ animationDelay: '0.3s' }}>
          <div className="warn-icon">
            <svg width="90" height="90" viewBox="0 0 64 64" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="27" cy="27" r="16"/>
              <line x1="39" y1="39" x2="56" y2="56"/>
              <circle cx="22" cy="22" r="4" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <p className="warn-text">Your objective is to<br/>search for hidden<br/>letters</p>
        </div>

      </div>

      <button className="btn-pink" onClick={onProceed}>
        Proceed
      </button>

    </div>
  )
}

export default MainWarns