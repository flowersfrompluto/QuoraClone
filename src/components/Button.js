function Button({ title, btnBg, classN, btnColor, clickFunc, border }) {
  const btnStyle = {
    backgroundColor: btnBg,
    padding: "10px 25px",
    color: btnColor,
    fontSize: "20px",
    border: border,
    borderRadius: "5px",
    textDecoration: "none",
    outline: "none",
    cursor: "pointer",
    display: "inline-block",
    margin: "10px 0",
  };

  return (
    <button style={btnStyle} className={classN} onClick={clickFunc}>{title}</button>
  );
}

export default Button;
