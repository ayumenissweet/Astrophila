import React from "react";

import strongStar from "../assets/strongStar.svg";

const StrongStar = ({ x, y, onClick, isFound }) => {
  if (isFound) return null;

  return (
    <div
      className="strong-star"
      style={{
        position: "absolute",
        left: x,
        top: y,
        cursor: "pointer",
        zIndex: 6,
      }}
      onClick={onClick}
    >
      <img src={strongStar} alt="Power Up" width="40" height="40" />
    </div>
  );
};

export default StrongStar;
