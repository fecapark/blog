import styles from "./Header.module.css";
import { Futura, NotoSansKR } from "@/shared/font";

export default function Header() {
  return (
    <header
      className={`${styles.header} ${Futura.variable} ${NotoSansKR.variable}`}
    >
      <div></div>
      <div>
        <span>fecapark</span>
      </div>
      <div></div>
    </header>
  );
}
