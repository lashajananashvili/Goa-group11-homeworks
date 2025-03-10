import React, { useState } from "react";

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: "100vh", textAlign: "center", padding: "20px", transition: "0.5s" }}>
      <button
        onClick={changeColor}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        შეცვალე ფონი
      </button>
    </div>
  );
};

export default BackgroundChanger;
