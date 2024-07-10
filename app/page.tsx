"use client";
import Content from "./components/theme/content";
import styles from "./components/theme/style.module.css";
import Sidebar from "./components/theme/sidebar";
import { ThemeContext } from "./components/theme/context";
import { useState } from "react";
import classNames from "classnames";



export default function Home() {
  const [theme,setTheme] = useState<string>("light");

  const handleThemeChange = () => {
    setTheme((current)=> (current === "light" ? "dark" : "light"));
  };

  return (
    
    <main >
      <div >
        <ThemeContext.Provider value = {theme}>
        <button className={styles.button} onClick={handleThemeChange}>Toggle Theme</button>
        <Content />
        <Sidebar />
        </ThemeContext.Provider>

      </div>
     </main>
  );
}


