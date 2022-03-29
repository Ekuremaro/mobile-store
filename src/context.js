import { useContext } from "react";

import React from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);
