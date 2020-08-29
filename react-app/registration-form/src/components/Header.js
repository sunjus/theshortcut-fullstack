import React from "react";

const Header = () => {
  return (
    <div style={styles.header}>
      <h2>Registration Form</h2>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: "#009de0",
    color: "white",
    textAlign: "center",
    minWidth: "100px",
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "25px",
  },
};

export default Header;
