import { Link, NavLink } from "react-router-dom";
import { useHelper } from "./useHelper";
import styles from "./Detail.module.css";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import { PutInfo } from "../PutInfo/PutInfo";

const Detail = () => {
  const {
    id,
    design,
    attack,
    defense,
    hp,
    img,
    name,
    speed,
    types,
    height,
    weight,
    favourites,
    show,
    switchShow,
    transform,
    type,
    /* putInfo, */
    handleDelete,
    handleStyle,
    addToFav,
  } = useHelper();

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        {!name ? (
          <Loading />
        ) : (
          <div className={styles.card}>
            <div className={styles.navigation}>
              {id.length < 5 && (
                <div className={styles.prev}>
                  <NavLink
                    to={`/pokemonDetail/${Number(id) > 1 ? Number(id) - 1 : 1}`}
                    className={styles.navlink}
                  >
                    Previous{" "}
                    <span className={styles.id}>N.°{Number(id) - 1}</span>
                  </NavLink>
                </div>
              )}
              <p className={styles.name}>
                {name}{" "}
                <span className={styles.id}>
                  N.°{id.length < 5 ? id : id.slice(0, 4)}
                </span>
              </p>
              {id.length < 5 && (
                <div className={styles.next}>
                  <NavLink
                    to={`/pokemonDetail/${Number(id) + 1}`}
                    className={styles.navlink}
                  >
                    Next <span className={styles.id}>N.°{Number(id) + 1}</span>
                  </NavLink>
                </div>
              )}
            </div>
            <div className={styles.options}>
              {favourites[name] ? (
                <div>
                  <input
                    type="checkbox"
                    id="check"
                    value={name}
                    className={styles.checkon}
                    onClick={addToFav}
                  ></input>
                  <label htmlFor="check" className={styles.fav}>
                    Favourite
                  </label>
                </div>
              ) : (
                <div>
                  <input
                    type="checkbox"
                    id="check"
                    value={name}
                    className={styles.check}
                    onClick={addToFav}
                  ></input>
                  <label htmlFor="check" className={styles.nofav}>
                    Favourite
                  </label>
                </div>
              )}
              {id.length < 5 ? (
                <select
                  className={styles.detail}
                  defaultValue={design}
                  onChange={(e) => handleStyle(e)}
                >
                  <option disabled>Styles</option>
                  <option value="imgT">Modern Design</option>
                  <option value="imgA">Artwork design</option>
                  <option value="imgC">Classic design</option>
                </select>
              ) : (
                <button onClick={handleDelete} className={styles.delete}>
                  delete pokemon
                </button>
              )}
              <Link
                to={
                  "/pokemonDetail/" +
                  (function () {
                    return Math.floor(Math.random() * (500 - 1 + 1) + 1);
                  })()
                }
              >
                <button className={styles.random}>Random Pokemon</button>
              </Link>
            </div>
            <div className={styles.pokemon}>
              <div className={styles.left}>
                <div className={styles.divimg}>
                  <img
                    src={img[design] ? img[design] : img}
                    alt="pokemon"
                    className={styles.img}
                  />
                  <div className={styles[type(types[0])]}></div>
                </div>
                <div className={styles.types}>
                  {types.map((e, i) => (
                    <p key={i} className={styles[`${e}t`]}>
                      {e}
                    </p>
                  ))}
                </div>
                <div className={styles.stats}>
                  <div className={styles.statdiv}>
                    <p className={styles.statp}>hp</p>
                    <div className={styles.stat}>
                      <div
                        className={styles[`${type(types[0])}progress`]}
                        style={{
                          width: transform(hp) + "%",
                        }}
                      >
                        <span className={styles[`${type(types[0])}reference`]}>
                          <p className={styles.percent}>{hp}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.statdiv}>
                    <p className={styles.statp}>attack</p>
                    <div className={styles.stat}>
                      <div
                        className={styles[`${type(types[0])}progress`]}
                        style={{ width: transform(attack) + "%" }}
                      >
                        <span className={styles[`${type(types[0])}reference`]}>
                          <p className={styles.percent}>{attack}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.statdiv}>
                    <p className={styles.statp}>defense</p>
                    <div className={styles.stat}>
                      <div
                        className={styles[`${type(types[0])}progress`]}
                        style={{ width: transform(defense) + "%" }}
                      >
                        <span className={styles[`${type(types[0])}reference`]}>
                          <p className={styles.percent}>{defense}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.statdiv}>
                    <p className={styles.statp}>speed</p>
                    <div className={styles.stat}>
                      <div
                        className={styles[`${type(types[0])}progress`]}
                        style={{ width: transform(speed) + "%" }}
                      >
                        <span className={styles[`${type(types[0])}reference`]}>
                          <p className={styles.percent}>{speed}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.statdiv}>
                    <p className={styles.statp}>weight</p>
                    <div className={styles.stat}>
                      <div
                        className={styles[`${type(types[0])}progress`]}
                        style={{
                          width: transform(weight) + "%",
                        }}
                      >
                        <span className={styles[`${type(types[0])}reference`]}>
                          <p className={styles.percent}>{weight}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.last}>
                    {id.length > 5 && (
                      <button className={styles.put} onClick={switchShow}>
                        change data
                      </button>
                    )}
                    {show && (
                      <div className={styles.modal}>
                        <PutInfo
                          switchShow={switchShow}
                          {...{
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
                          }}
                        />
                      </div>
                    )}
                    <NavLink className={styles.tohome} to="/home">
                      to home
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
