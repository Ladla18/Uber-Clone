import React, { useState } from "react";
import { createContext } from "react";
export const CaptainDataContext = createContext(null);
const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: "",
    },
  });
  return (
    <>
      <CaptainDataContext.Provider value={{ captain, setCaptain }}>
        {children}
      </CaptainDataContext.Provider>
    </>
  );
};

export default CaptainContext;
