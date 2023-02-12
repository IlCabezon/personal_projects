import styles from "./PokemonCard.module.css";
import { NavLink } from "react-router-dom";
import at from "./resources/battle.png";
import wt from "./resources/weight.png";
import { useHelper } from "./useHelper";

const PokemonCard = ({ id, name, img, attack, weight, types }) => {
  const { type } = useHelper();

  let className = type(types[0]?.name ? types[0].name : types[0]);

  return (
    <div className={styles[className]}>
      <p className={styles[`${className}name`]}>{name}</p>
      <div className={styles[`${className}typeback`]}>
        <NavLink
          to={`/pokemonDetail/${id}`}
          className={styles[`${className}nav`]}
        >
          <img src={img} alt="pokeImg" className={styles[`${className}img`]} />
        </NavLink>
        <div className={styles[`${className}info`]}>
          <p className={styles[`${className}typesp`]}>types</p>
          <div className={styles[`${className}typesimg`]}>
            {types.map((e, i) => (
              <label
                key={i}
                className={styles[`${e.name ? e.name : e}icon`]}
              ></label>
            ))}
          </div>
          <p className={styles[`${className}about`]}>About</p>
          <div className={styles.common}>
            <p className={styles.ainfo}>
              <img src={at} alt="attack" className={styles.icon} />
              {attack}cp
            </p>
            <p className={styles.ainfo}>
              <img src={wt} alt="weight" className={styles.icon} />
              {weight}kg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
