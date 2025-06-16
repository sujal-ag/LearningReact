import React,{ createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    toggleTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    const context = useContext(ThemeContext);
    return context;
}