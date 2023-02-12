import styles from "./Social.module.css";

const Social = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.linkedin}
        href="https://www.linkedin.com/in/agus-castro-3aa044219/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-linkedin"></i>
      </a>

      <a
        className={styles.instagram}
        href="https://www.instagram.com/fcastroagus/?hl=es"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-instagram"></i>
      </a>
      <a
        className={styles.github}
        href="https://github.com/IlCabezon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-github"></i>
      </a>
    </footer>
  );
};

export default Social;
