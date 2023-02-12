import styles from "./Footer.module.css";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.notch}>
        <span className={styles.left}></span>
        <span className={styles.right}></span>
        <span className={styles.bot}></span>
      </div>
      <div className={styles.bodyfoot}></div>
      <Social />
    </div>
  );
};

export default Footer;
