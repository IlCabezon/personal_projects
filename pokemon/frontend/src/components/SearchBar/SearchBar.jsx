import styles from "./SearchBar.module.css";
import { useHelper } from "./useHelper";
import icon from "./resources/search.png";

const SearchBar = ({ handleStyle, clearCheck }) => {
  const { input, handleChange, handleClick, handleSubmit } =
    useHelper(clearCheck);

  return (
    <div className={styles.main}>
      <select
        onChange={(e) => handleStyle(e)}
        defaultValue="Styles"
        className={styles.styles}
      >
        <option disabled>Styles</option>
        <option value="imgT">Modern Design</option>
        <option value="imgA">Artwork design</option>
        <option value="imgC">Classic design</option>
      </select>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="name"
          value={input.name}
          onChange={handleChange}
          className={styles.name}
          placeholder="Search for pokemons"
          autoComplete="off"
        ></input>
        <button type="submit" className={styles.search}>
          <img src={icon} alt="search" className={styles.icon} />
        </button>
      </form>
      <button onClick={handleClick} className={styles.reset}>
        reset filters
      </button>
    </div>
  );
};

export default SearchBar;
