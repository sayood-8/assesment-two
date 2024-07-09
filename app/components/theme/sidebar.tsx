import { useContext } from "react";
import styles from "./style.module.css";
import { ThemeContext } from "./context";

export default function sidebar(){
    const theme = "styles." + useContext(ThemeContext);
   
    return(
        <>
        <div className = {theme} >
        <div className = {styles.division}>
            <p>Random short paragraph</p>
            <p>As I sit in my room late at night, staring at the computer screen, I decide it would be a good idea to create this text.</p>
            <p> There isn't much meaning to it,other than to get some simple practice..</p>
        </div>

        </div>

        </>
    )
}