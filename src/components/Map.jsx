import "../styles/Map.css";
import Planet from "./Planet";
import { StaticProps } from "./StaticProps";

function Map() {
  function drawMap() {
    return StaticProps.map((prop) => {
      return (
        <Planet planetIcon={prop.propIcon} x={prop.posX} y={prop.posY}></Planet>
      );
    });
  }

  return <div className="map">{drawMap()}</div>;
}

export default Map;
