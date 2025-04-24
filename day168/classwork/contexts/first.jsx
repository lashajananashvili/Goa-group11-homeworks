import React, { createContext } from "react";

export const FirstContext = createContext();

export const FirstProvider = ({ children }) => {
  const firstValue = "im first context";

  return (
    <FirstContext.Provider value={firstValue}>
      {children}
    </FirstContext.Provider>
  );
};