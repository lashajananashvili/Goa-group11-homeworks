import React, { useState, useEffect } from "react";

const WindowSizeMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const updateMessage = () => {
      setMessage(window.innerWidth > window.innerHeight ? "ფანჯარა არის ჰორიზონტალური" : "ფანჯარა არის ვერტიკალური");
    };

    window.addEventListener("resize", updateMessage);
    updateMessage(); // პირველადაც დავიძახებთ

    return () => window.removeEventListener("resize", updateMessage);
  }, []);

  return <p>{message}</p>;
};

export default WindowSizeMessage;
