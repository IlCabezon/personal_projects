import styles from "./Pokedex.module.css";
import PokemonCards from "../PokemonCards/PokemonCards.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Filters from "../Filters/Filters.jsx";
import Loading from "../Loading/Loading";
import { useHelper } from "./useHelper";
import logo from "../common/pokemonLogo.png";

const Pokedex = () => {
  const {
    design,
    pokemonsCopy,
    types,
    totalPages,
    currentPage,
    clearCheck,
    changePages,
    handleStyle,
  } = useHelper();
  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <img src={logo} alt="logo" className={styles.logo} />
        {!pokemonsCopy.length ? (
          <Loading />
        ) : (
          <div className={styles.body}>
            <Filters types={types} />
            <SearchBar handleStyle={handleStyle} clearCheck={clearCheck} />
            <div className={styles.pagination}>
              {totalPages?.map((e) => {
                if (e === currentPage) {
                  return (
                    <button
                      className={styles.currentPage}
                      key={e}
                      onClick={() => changePages(e)}
                    >
                      {e}
                    </button>
                  );
                } else {
                  return (
                    <button
                      className={styles.pages}
                      key={e}
                      onClick={() => changePages(e)}
                    >
                      {e}
                    </button>
                  );
                }
              })}
            </div>
            <PokemonCards pokemon={pokemonsCopy} design={design} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokedex;

/*
width: 100%;
  text-overflow: ellipsis;
  overflow: hidden; 
  white-space: pre;
*/
