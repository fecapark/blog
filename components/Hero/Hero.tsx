import RootImage from "../RootImage/RootImage";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles["image-container"]}>
        <RootImage
          className={styles.image}
          src="/images/time-timer-hero.jpeg"
          alt=""
          fill
          quality={100}
        />
      </div>
    </div>
  );
}
