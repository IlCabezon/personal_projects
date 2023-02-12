import { useHelper } from "./useHelper";
import styles from "./Home.module.css";
import Header from "../Header/Header";
import Pokedex from "../Pokedex/Pokedex";
import Footer from "../Footer/Footer";
import Favourites from "../Favourites/Favourite";
import CreatePokemon from "../CreatePokemon/CreatePokemon";

const Home = () => {
  const { tab, handleTab, setTab } = useHelper();
  let aux;

  if (tab === "pokedex") {
    aux = <Pokedex />;
  }
  if (tab === "favs") {
    aux = <Favourites />;
  }
  if (tab === "create") {
    aux = <CreatePokemon setTab={setTab} />;
  }
  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <Header handleTab={handleTab} />
        {aux}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
