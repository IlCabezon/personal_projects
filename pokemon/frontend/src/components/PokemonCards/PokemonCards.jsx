import styles from "./PokemonCards.module.css";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import ArtworkDesign from "../PokemonCard/ArtworkDesign.jsx";
import ClassicDesign from "../PokemonCard/ClassicDesign.jsx";

const PokemonCards = ({ pokemon, design }) => {
  if (design === "imgT") {
    return (
      <div className={styles.main}>
        <div className={styles.submain}>
          {pokemon[0].name ? (
            pokemon &&
            pokemon.map((e, i) => (
              <PokemonCard
                key={i}
                id={e.id}
                types={e.types}
                name={e.name}
                attack={e.attack}
                weight={e.weight}
                hp={e.hp}
                img={e.img[design] ? e.img[design] : e.img}
              />
            ))
          ) : (
            <div className={styles.ups}>
              <span>Ups...</span>
              <span>Pokemon not found</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  if (design === "imgA") {
    return (
      <div className={styles.main}>
        <div className={styles.submain}>
          {pokemon[0].name ? (
            pokemon &&
            pokemon.map((e, i) => (
              <ArtworkDesign
                key={i}
                id={e.id}
                types={e.types}
                name={e.name}
                attack={e.attack}
                weight={e.weight}
                hp={e.hp}
                img={e.img[design] ? e.img[design] : e.img}
              />
            ))
          ) : (
            <div className={styles.ups}>
              <span>Ups...</span>
              <span>Pokemon not found</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  if (design === "imgC") {
    return (
      <div className={styles.main}>
        <div className={styles.submain}>
          {pokemon[0].name ? (
            pokemon &&
            pokemon.map((e, i) => (
              <ClassicDesign
                key={i}
                id={e.id}
                types={e.types}
                name={e.name}
                attack={e.attack}
                weight={e.weight}
                hp={e.hp}
                img={e.img[design] ? e.img[design] : e.img}
              />
            ))
          ) : (
            <div className={styles.ups}>
              <span>Ups...</span>
              <span>Pokemon not found</span>
            </div>
          )}
        </div>
      </div>
    );
  }
};
export default PokemonCards;
