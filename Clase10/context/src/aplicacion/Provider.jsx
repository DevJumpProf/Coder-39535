import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const MiContext = () => useContext(AppContext);

const Provider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
