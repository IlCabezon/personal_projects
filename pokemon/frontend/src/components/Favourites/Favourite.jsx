import { useHelper } from "./useHelper";
import styles from "./Favourites.module.css";
import logo from "../common/pokemonLogo.png";
import PokemonCards from "../PokemonCards/PokemonCards";
import Filters from "../Filters/Filters";

export const Favourite = () => {
  const {
    original,
    favourites,
    filterActive,
    types,
    show,
    resetFilter,
    handleDelete,
    switchDelete,
  } = useHelper();
  let pokes = [];

  let aux = filterActive ? favourites : original;

  for (let e in aux) {
    pokes.push(aux[e]);
  }

  return (
    <div className={styles.main}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.submain}>
        {Object.keys(aux).length ? (
          <div className={styles.body}>
            <Filters types={types} location="favs" />
            <div className={styles.nav}>
              <button className={styles.reset} onClick={switchDelete}>
                Delete
              </button>
              {show && (
                <div className={styles.delete}>
                  <div className={styles.close} onClick={switchDelete}></div>
                  <div className={styles.options}>
                    {pokes.map((e, i) => (
                      <div className={styles.poke} key={i}>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          version="1.1"
                          viewBox="0 0 16 16"
                          margin="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          color="rgb(223, 78, 78)"
                          onClick={handleDelete}
                          className={styles.svg}
                        >
                          <path
                            value={e.id}
                            d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"
                          ></path>
                        </svg>

                        <label
                          onClick={handleDelete}
                          className={styles.labelcheck}
                          value={e.id}
                        >
                          {e.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <p className={styles.title}>Favourites</p>
              <button onClick={resetFilter} className={styles.reset}>
                reset filter
              </button>
            </div>
            <PokemonCards pokemon={pokes} design={"imgT"} />
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.message}>
              <p className={styles.ptitle}>
                no pokemons were found in your favorites list.
              </p>
              <p className={styles.help}>
                Try the following steps to find results:
              </p>
              <ol className={styles.steps}>
                <li className={styles.step}>Go to the 'pokedex' tab</li>
                <li className={styles.step}>
                  View the detail of your favorite pokemon
                </li>
                <li className={styles.step}>
                  Add it to favorites from the 'favorites' option
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourite;
