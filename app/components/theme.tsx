"use client";
import { useContext, useState, createContext} from 'react';
import styles from "./theme.module.css";



const ThemeContext = createContext<string>('light');
export default function theme(){
    const [theme,setTheme] = useState<string>("light");
    const handleThemeChange = () => {
        setTheme((current)=> (current === "light" ? "dark" : "light"));
    };
    return(
    <>
        <ThemeContext.Provider value = {theme}> 
        <button onClick={handleThemeChange}>Toggle Theme</button>
        <ThemeChange />  
        </ThemeContext.Provider>    
        
    </>
    )
}
function ThemeChange(){
    const themer = useContext(ThemeContext);
    return(
        <>
        <div>
            ("themer value is" +{themer})
        </div>
        </>
    )
};