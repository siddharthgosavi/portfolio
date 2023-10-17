import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  return <AppContext.Provider value={[open, setOpen]}>{children}</AppContext.Provider>;
}

export function toggleMenu() {
  return useContext(AppContext);
}
