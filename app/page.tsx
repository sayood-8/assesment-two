
import Image from "next/image";
import Content from "./components/content";
import Theme from "./components/theme";
import styles from "./page.module.css";


export default function Home() {
  return (
    
    <main>
      <div>
      <Content />
      <Theme />
      </div>
     </main>
  );
}
