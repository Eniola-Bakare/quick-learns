"use client";

import { createContext, useContext } from "react";

type Theme = {
  primary: string;
  secondary: string;
};

const defaultTheme: Theme = {
  primary: "#007bff",
  secondary: "#6c7557",
};

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
