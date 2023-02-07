import styles from "./Header.module.css";
import { Futura, NotoSansKR } from "@/shared/font";
import { MdMenu, MdSearch } from "react-icons/md";

export default function Header() {
  return (
    <header
      className={`${styles.header} ${Futura.variable} ${NotoSansKR.variable}`}
    >
      <div>
        <div className={styles["icon-wrapper"]}>
          <MdMenu />
        </div>
      </div>
      <div className={styles.title}>
        <span>fecapark</span>
      </div>
      <div>
        <div className={styles["icon-wrapper"]}>
          <MdSearch />
        </div>
      </div>
    </header>
  );
}
