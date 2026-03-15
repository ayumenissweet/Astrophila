function Planet({ planetIcon, x, y }) {
  return (
    <img
      src={planetIcon}
      className="planet"
      style={{
        position: "absolute",
        left: x,
        top: y,
      }}
    />
  );
}

export default Planet;
