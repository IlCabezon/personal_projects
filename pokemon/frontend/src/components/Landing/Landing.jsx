import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";
import logo from "../common/pokemonLogo.png";
import pokes from "./images/pokemonImg.png";
import Social from "../Social/Social";

const Landing = () => {
  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <img src={logo} className={styles.logo} alt="logo" />
        <NavLink to="/home" className={styles.navlink}>
          <p className={styles.gotta}>Gotta catch 'em all!</p>
        </NavLink>
        <img src={pokes} className={styles.pokes} alt="background" />
      </div>
      <Social />
    </div>
  );
};

export default Landing;
