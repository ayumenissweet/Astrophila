import Map from "../components/Map";

import "../styles/Level.css";

function Level() {
  return (
    <div className="level">
      <div className="level-left">
        <div className="options"></div>
        <h1>Level 1</h1>
      </div>
      <div className="level-right">
        <Map></Map>
      </div>
    </div>
  );
}

export default Level;
