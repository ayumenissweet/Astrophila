import "../styles/Map.css";
import Planet from "./Planet";
import Star from "./Star";
import { StaticProps, stars } from "./StaticProps";

function Map() {
  function drawMap() {
    return StaticProps.map((prop) => {
      return (
        <Planet planetIcon={prop.propIcon} x={prop.posX} y={prop.posY}></Planet>
      );
    });
  }

  function drawStars() {
    return stars.map((star) => {
      return (
        <Star
          x={star.x}
          y={star.y}
          size={star.size}
          duration={star.duration}
        ></Star>
      );
    });
  }

  return (
    <div className="map">
      {drawMap()}
      {drawStars()}
    </div>
  );
}

export default Map;
