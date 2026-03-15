import "../styles/Button.css";

function Button({ text, icon }) {
  return (
    <button className="btn">
      <div className="btn-text">
        <p>{text}</p>
        {icon && <img src={icon} alt="icon" />}
      </div>
    </button>
  );
}

export default Button;
