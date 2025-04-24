import React, { createContext } from "react";

export const SecondContext = createContext();

export const SecondProvider = ({ children }) => {
  const secondValue = "i am second context";

  return (
    <SecondContext.Provider value={secondValue}>
      {children}
    </SecondContext.Provider>
  );
};