import React from "react";

const InputField = ({
  type,
  label,
  placeHolder,
  value,
  name,
  changeHandler,
  error,
}) => {
  return (
    <div style={styles.container}>
      <label>{label}</label>
      <input
        style={styles.input}
        type={type}
        placeholder={placeHolder}
        value={value}
        name={name}
        onChange={changeHandler}
      />
      <small style={{ color: "darkRed" }}>{error}</small>
    </div>
  );
};

const styles = {
  input: {
    border: "none",
    borderBottom: "1px solid #009de0",
    fontSize: "10px",
    flex: 1,
    outline: "none",
    padding: "7px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minWidth: "40%",
    padding: "15px",
    fontSize: "17px",
  },
};

export default InputField;
