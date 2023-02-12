import styles from "./Header.module.css";
import pokeball from "../common/pokeball.svg";
import create from "../common/create.svg";
import landing from "../common/landing.svg";
import fav from "../common/fav.svg";
import play from "../common/play.png";
import { NavLink } from "react-router-dom";

const Header = ({ handleTab }) => {
  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <div
          className={styles.block}
          onClick={handleTab}
          value="pokedex"
          name="a"
        >
          <button className={styles.activePokedex}>
            <img
              src={pokeball}
              alt="pokeball"
              className={styles.svg}
              value="pokedex"
            />
            <span className={styles.span}>pokedex</span>
          </button>
        </div>
        <div
          className={styles.block}
          value="create"
          onClick={(e) => handleTab(e)}
        >
          <button className={styles.activeCreate}>
            <img
              src={create}
              alt="create"
              className={styles.svg}
              value="create"
            />
            <span className={styles.span}>create</span>
          </button>
        </div>
        <div className={styles.block} onClick={handleTab} value="favs">
          <button className={styles.activeFavourite}>
            <img src={fav} alt="fav" className={styles.svg} value="favs" />
            <span className={styles.span}>favs</span>
          </button>
        </div>
        <NavLink to="/">
          <div className={styles.block}>
            <button className={styles.activeLanding}>
              <img
                src={landing}
                alt="landing"
                className={(styles.landing, styles.svg)}
              />
              <span className={styles.span}>landing</span>
            </button>
          </div>
        </NavLink>
        <div className={styles.block} onClick={handleTab} value="play">
          <button className={styles.activeGame}>
            <img src={play} alt="game" className={styles.svg} value="play" />
            <span className={styles.span}>play</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
