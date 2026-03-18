import "../styles/Star.css";

function Star({ x, y, size, duration }) {
  return (
    <div
      className="star"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

export default Star;
