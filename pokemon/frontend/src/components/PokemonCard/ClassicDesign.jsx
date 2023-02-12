import styles from "./ClassicDesign.module.css";
import { NavLink } from "react-router-dom";
import { useHelper } from "./useHelper";

const ClassicDesign = ({ id, name, img, attack, weight, types }) => {
  const { type } = useHelper();
  let className = type(types[0].name);
  return (
    <div className={styles[className]}>
      <NavLink to={`/pokemonDetail/${id}`} className={styles.nav}>
        <div className={styles.card}>
          <div className={styles[`${className}front`]}>
            <p className={styles[`${className}name`]}>{name}</p>
            <img src={img} alt="pokeImg" className={styles.img} />
          </div>
          <div className={styles[`${className}back`]}>
            <div className={styles[`${className}info`]}>
              <div className={styles.about}>
                <p className={styles.typesp}>types</p>
                <div className={styles.icons}>
                  {types.map((e, i) => (
                    <div className={styles.map} key={i}>
                      <label
                        key={i}
                        className={styles[`${e.name}icon`]}
                      ></label>
                      <p className={styles.tname}>{e.name}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.stats}>
                  <p className={styles[`${className}ap`]}>{weight}kg</p>
                  <p className={styles[`${className}ap`]}>{attack}pc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ClassicDesign;
