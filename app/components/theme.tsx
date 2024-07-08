"use client";
import { useContext, useState, createContext } from 'react';
import styles from "./theme.module.css";

export const ThemeContext = createContext('light');

function ThemeCon(){
    const [theme,setTheme] = useState<string>("light");

    const toggleTheme = () => {
        setTheme((current)=> (current === "light" ? "dark" : "light"));
    }
    return(
        <>
    <ThemeContext.Provider value = {theme}>
    <div className = {styles.dark_mode}>
    <button className = {styles.buttons} onClick={() => {
    setTheme(theme === "dark" ? "light" : "dark");
    
  }}>
    Toggle theme
  </button>
    </div>
    </ThemeContext.Provider>
        </>
    )

}
export default function Theme(){

    const Thememain = useContext(ThemeContext);
    
    return(
        <>
        <ThemeCon />
        <div>{(Thememain)}</div>
        
        </>
    )
}