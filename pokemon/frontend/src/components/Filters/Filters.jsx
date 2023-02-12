import { useHelper } from "./useHelper";
import styles from "./Filters.module.css";
import buff from "./resources/buff.png";
import nerf from "./resources/nerf.png";
import api from "./resources/api.png";
import db from "./resources/database.png";
import asc from "./resources/asc.png";
import desc from "./resources/desc.png";
import arrow from "./resources/left-arrow.png";

const Filters = ({ types, location }) => {
  const { dispatchFilter, dispatchSort } = useHelper(location);
  return (
    <div className={styles.main}>
      <img src={arrow} alt="arrow" className={styles.arrow} />
      <div className={styles.filters}>
        {types &&
          types.map((e, i) => (
            <div className={styles.block} key={i}>
              <input
                type="checkbox"
                name="check"
                key={i}
                id={`activate${i}`}
                //onChange={dispatchFilter}
                onClick={dispatchFilter}
                value={e.name}
                className={styles[e.name.slice(1)]}
              ></input>
              <label htmlFor={`activate${i}`} className={styles[e.name]}>
                {e.name}
              </label>
            </div>
          ))}
      </div>
      <div className={styles.sorts}>
        <span className={styles.p}>Sort by attack</span>
        <div className={styles.block}>
          <img
            src={nerf}
            alt="nerfAttack"
            className={styles.image}
            onClick={dispatchSort}
            value={"minor"}
          />
          <img
            src={buff}
            alt="buffAttack"
            className={styles.image}
            onClick={dispatchSort}
            value={"major"}
          />
        </div>
        <span className={styles.p}>Sort by storage</span>
        <div className={styles.block}>
          <img
            src={api}
            alt="api"
            className={styles.image}
            onClick={dispatchFilter}
            value="api"
          />
          <img
            src={db}
            alt="db"
            className={styles.image}
            onClick={dispatchFilter}
            value="db"
          />
        </div>
        <span className={styles.p}>Sort by aplhabetic</span>
        <div className={styles.block}>
          <img
            src={asc}
            alt="asc"
            className={styles.image}
            onClick={dispatchSort}
            value={"a-z"}
          />
          <img
            src={desc}
            alt="desc"
            className={styles.image}
            onClick={dispatchSort}
            value={"z-a"}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
