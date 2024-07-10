import { useContext, useEffect } from "react";
import { ThemeContext } from "./context";
import styles from "./style.module.css";



export default function content(){
    const theme = useContext(ThemeContext) ;
    console.log(theme);
    const contentClasses = ` ${theme === "dark" ? styles.dark : styles.light}`;
    return(
        <>
        <div className = {contentClasses}>
        <div className = {styles.division}  >
            <div>this is the test html content </div>
            <p>Context hook</p>
            <p>Basically it allows you to get the value of what you choose and make it a global variable everywhere. </p>
            <p>or you could say a parent could give his children or grand children regardless of how nested it is.</p>
        </div>
        </div>

        </>
    )
}