import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Loading...");
      setMessage("Loading...");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <p>{message}</p>;
};

export default TimerComponent;
