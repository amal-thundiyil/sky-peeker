import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const currLocation = "";
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AppContext.Provider
      value={{
        locations,
        setLocations,
        loading,
        setLoading,
        searchTerm,
        setSearchTerm,
        currLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppContext, AppProvider };
