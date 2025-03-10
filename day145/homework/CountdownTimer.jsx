import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const storedTime = localStorage.getItem("remainingTime");
  const [time, setTime] = useState(storedTime ? parseInt(storedTime) : 10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("remainingTime", time);
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setTime(10);
    setIsRunning(false);
    localStorage.removeItem("remainingTime");
  };

  return (
    <div style={styles.container}>
      <h1>⏳ Countdown Timer</h1>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(parseInt(e.target.value))}
        disabled={isRunning}
        style={styles.input}
      />
      <h2>{time > 0 ? `${time} seconds` : "Time's up!"}</h2>
      <div style={styles.buttons}>
        <button onClick={handleStart} disabled={isRunning} style={styles.button}>Start</button>
        <button onClick={handleStop} disabled={!isRunning} style={styles.button}>Stop</button>
        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
