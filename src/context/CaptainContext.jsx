import { createContext, useState } from "react";

export const captainContext = createContext();

export const CaptainContextProvider = ({ children }) => {
  const [captain, setCaptain] = useState(null);

  return (
    <captainContext.Provider value={{ captain, setCaptain }}>
      {children}
    </captainContext.Provider>
  );
};
