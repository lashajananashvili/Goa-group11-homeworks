import React, { useState, useEffect } from "react";

const ResizeComponent = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2>ფანჯრის ზომა:</h2>
      <p>{size.width} x {size.height}</p>
    </div>
  );
};

export default ResizeComponent;
