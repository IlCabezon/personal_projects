import { NavLink } from "react-router-dom";
import styles from "./ArtworkDesign.module.css";
import { useHelper } from "./useHelper";

const ArtworkDesign = ({ id, name, img, attack, weight, types, hp }) => {
  const { type } = useHelper();
  let className = type(types[0].name);
  return (
    <div className={styles[className]}>
      <div className={styles.divimg}>
        <NavLink to={`/pokemonDetail/${id}`} className={styles.nav}>
          <img src={img} alt="pokeImg" className={styles.img} />
        </NavLink>
      </div>
      <div className={styles.info}>
        <p className={styles[`${className}name`]}>{name}</p>
        <p className={styles.hp}>hp {hp}</p>
        <div className={styles.about}>
          {types.map((e, i) => (
            <label key={i} className={styles[`${e.name}icon`]}></label>
          ))}
          <p className={styles[`${className}ap`]}>{weight}kg</p>
          <p className={styles[`${className}ap`]}>{attack}pc</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDesign;
