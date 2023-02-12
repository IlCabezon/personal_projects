import styles from "./PutInfo.module.css";
import close from "../common/close.png";
import { useHelper } from "./useHelper";

export const PutInfo = ({
  switchShow,
  id,
  attack,
  defense,
  hp,
  img,
  name,
  speed,
  types,
  height,
  weight,
}) => {
  const initialForm = {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    img,
  };

  const { data, errors, control, handleChange, handleSubmit } = useHelper(
    initialForm,
    id
  );

  return (
    <div className={styles.main}>
      <img
        src={close}
        alt="close"
        className={styles.close}
        onClick={switchShow}
      />
      <div className={styles.submain}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.div}>
            <span className={styles.spaninput}>Name</span>
            <input
              value={data.name}
              name="name"
              className={errors["name"] ? styles.error : styles.ok}
              autoComplete="off"
              onChange={handleChange}
            ></input>
            {errors["name"] && (
              <p className={styles.perror}>
                ¡Only accepts letters between 6 to 15 characters!
              </p>
            )}
          </div>
          <div className={styles.div}>
            <span className={styles.spaninput}>Health</span>
            <input
              value={data.hp}
              name="hp"
              className={errors["hp"] ? styles.error : styles.ok}
              autoComplete="off"
              onChange={handleChange}
            ></input>
            {errors["hp"] && (
              <p className={styles.perror}>¡Must be between 0 to 10000!</p>
            )}
          </div>
          <div className={styles.div}>
            <span className={styles.spaninput}>Attack</span>
            <input
              value={data.attack}
              name="attack"
              className={errors["attack"] ? styles.error : styles.ok}
              autoComplete="off"
              onChange={handleChange}
            ></input>
            {errors["attack"] && (
              <p className={styles.perror}>¡Must be between 0 to 10000!</p>
            )}
          </div>
          <div className={styles.div}>
            <span className={styles.spaninput}>Defense</span>
            <input
              value={data.defense}
              name="defense"
              className={errors["defense"] ? styles.error : styles.ok}
              autoComplete="off"
              onChange={handleChange}
            ></input>
            {errors["defense"] && (
              <p className={styles.perror}>¡Must be between 0 to 10000!</p>
            )}
          </div>
          <div className={styles.div}>
            <span className={styles.spaninput}>Speed</span>
            <input
              value={data.speed}
              name="speed"
              className={errors["speed"] ? styles.error : styles.ok}
              autoComplete="off"
              onChange={handleChange}
            ></input>
            {errors["speed"] && (
              <p className={styles.perror}>¡Must be between 0 to 10000!</p>
            )}
          </div>
          <div className={styles.div}>
            <span className={styles.spaninput}>height</span>
            <input
              value={data.height}
              name="height"
              className={errors["height"] ? styles.error : styles.ok}
              autoComplete="off"
              onChange={handleChange}
            ></input>
            {errors["height"] && (
              <p className={styles.perror}>¡Must be between 0 to 10000!</p>
            )}
          </div>
          <div className={styles.div}>
            <span className={styles.spaninput}>weight</span>
            <input
              value={data.weight}
              name="weight"
              className={errors["weight"] ? styles.error : styles.ok}
              autoComplete="off"
              onChange={handleChange}
            ></input>
            {errors["weight"] && (
              <p className={styles.perror}>¡Must be between 0 to 10000!</p>
            )}
          </div>
          {control.length ? (
            <button disabled className={styles.buttdisabled}>
              Send
            </button>
          ) : (
            <button className={styles.butt}>Send</button>
          )}
        </form>
      </div>
    </div>
  );
};
