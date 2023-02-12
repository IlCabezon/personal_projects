import { useValidation } from "./useValidation";
import DefaultImages from "../DefaultImages/DefaultImages.jsx";
import styles from "./CreatePokemon.module.css";
import logo from "../common/pokemonLogo.png";

const CreatePokemon = ({ setTab }) => {
  const initialForm = {
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    img: "",
  };

  const validateForm = (data) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexNumber = /([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])/;

    if (!data.name.trim()) {
      errors.name = "¡Name Must Be Required!";
    } else if (!regexName.test(data.name.trim())) {
      errors.name = "Name only accepts letters and spaces";
    }
    if (!data.hp.trim()) {
      errors.hp = "This shield canot be empty";
    } else if (!regexNumber.test(data.hp.trim())) {
      errors.hp = "This shield only accept numbers";
    } else if (data.hp > 10000 || data.hp < 0) {
      errors.hp = "only numbers less than 10000";
    }
    if (!data.attack.trim()) {
      errors.attack = "This shield canot be empty";
    } else if (!regexNumber.test(data.attack.trim())) {
      errors.attack = "This shield only accept numbers";
    } else if (data.attack > 10000 || data.attack < 0) {
      errors.attack = "only numbers less than 10000";
    }
    if (!data.defense.trim()) {
      errors.defense = "This shield canot be empty";
    } else if (!regexNumber.test(data.defense.trim())) {
      errors.defense = "This shield only accept numbers";
    } else if (data.defense > 10000 || data.defense < 0) {
      errors.defense = "only numbers less than 10000";
    }
    if (!data.speed.trim()) {
      errors.speed = "This shield canot be empty";
    } else if (!regexNumber.test(data.speed.trim())) {
      errors.speed = "This shield only accept numbers";
    } else if (data.speed > 10000 || data.speed < 0) {
      errors.speed = "only numbers less than 10000";
    }
    if (!data.height.trim()) {
      errors.height = "This shield canot be empty";
    } else if (!regexNumber.test(data.height.trim())) {
      errors.height = "This shield only accept numbers";
    } else if (data.height > 10000 || data.height < 0) {
      errors.height = "only numbers less than 10000";
    }
    if (!data.weight.trim()) {
      errors.weight = "This shield canot be empty";
    } else if (!regexNumber.test(data.weight.trim())) {
      errors.weight = "This shield only accept numbers";
    } else if (data.weight > 10000 || data.weight < 0) {
      errors.weight = "only numbers less than 10000";
    }
    if (!data.img.trim()) {
      errors.weight = "This shield canot be empty";
    }
    if (data.types.lenght < 0) {
      errors.types = "The pokemon must have at least one type";
    }
    return errors;
  };

  const {
    types,
    errors,
    page,
    control,
    currentImg,
    setCurrentImg,
    changePage,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCheck,
  } = useValidation(initialForm, validateForm, setTab);

  return (
    <div className={styles.main}>
      <div className={styles.submain}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles.img} />
          <p className={styles.pokedex} onClick={() => setTab("pokedex")}>
            X
          </p>
        </div>
        <p className={styles.title}>Create pokemon</p>
        <div className={styles.formdiv}>
          <form onSubmit={handleSubmit} className={styles.form}>
            {page === 1 ? (
              <div>
                <div className={styles.namediv}>
                  <span className={styles.spaninput}>name</span>
                  {
                    /* !errors.name.lenght ? (
                    <input
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={styles.input}
                      autoComplete="off"
                      placeholder="Insert pokemon's name"
                    ></input>
                  ) :  */ <input
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={styles.input}
                      autoComplete="off"
                      placeholder="Insert pokemon's name"
                    ></input>
                  }
                  {control && errors["name"] && (
                    <p className={styles.error}>{errors["name"]}</p>
                  )}
                </div>
                <div className={styles.hpdefense}>
                  <div className={styles.hpdiv}>
                    <span className={styles.spaninput}>health</span>
                    <input
                      name="hp"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={styles.input}
                      autoComplete="off"
                      placeholder="Insert pokemon's hp points"
                    ></input>
                    {control && errors["hp"] && (
                      <p className={styles.error}>{errors["hp"]}</p>
                    )}
                  </div>
                  <div className={styles.defensediv}>
                    <span className={styles.spaninput}>defense</span>
                    <input
                      name="defense"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={styles.input}
                      autoComplete="off"
                      placeholder="Insert pokemon's defense points"
                    ></input>
                    {control && errors["defense"] && (
                      <p className={styles.error}>{errors["defense"]}</p>
                    )}
                  </div>
                </div>
                <div className={styles.weightheight}>
                  <div className={styles.weightdiv}>
                    <span className={styles.spaninput}>weight</span>
                    <input
                      name="weight"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={styles.input}
                      autoComplete="off"
                      placeholder="Insert pokemon's weight"
                    ></input>
                    {control && errors["wight"] && (
                      <p className={styles.error}>{errors["weight"]}</p>
                    )}
                  </div>
                  <div className={styles.heightdiv}>
                    <span className={styles.spaninput}>height</span>
                    <input
                      name="height"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={styles.input}
                      autoComplete="off"
                      placeholder="Insert pokemon's height "
                    ></input>
                    {control && errors["height"] && (
                      <p className={styles.error}>{errors["height"]}</p>
                    )}
                  </div>
                </div>
                <div className={styles.speedattack}>
                  <div className={styles.speeddiv}>
                    <span className={styles.spaninput}>speed</span>
                    <input
                      name="speed"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={styles.input}
                      autoComplete="off"
                      placeholder="Insert pokemon's speed points"
                    ></input>
                    {control && errors["speed"] && (
                      <p className={styles.error}>{errors["speed"]}</p>
                    )}
                  </div>
                  <div className={styles.attackdiv}>
                    <span className={styles.spaninput}>attack</span>
                    <input
                      name="attack"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={styles.input}
                      autoComplete="off"
                      placeholder="Insert pokemon's attack points "
                    ></input>
                    {control && errors["attack"] && (
                      <p className={styles.error}>{errors["attack"]}</p>
                    )}
                  </div>
                </div>
                <div className={styles.types}>
                  {types &&
                    types.map((e, i) => (
                      <div className={styles.box} key={i}>
                        <input
                          type="checkbox"
                          name="check"
                          key={i}
                          id={`activate${i}`}
                          value={e.id}
                          onChange={(e) => handleCheck(e)}
                          className={styles[e.name.slice(1)]}
                        ></input>
                        <label
                          htmlFor={`activate${i}`}
                          className={styles[e.name]}
                        >
                          {e.name}
                        </label>
                      </div>
                    ))}
                  {control && errors["types"] && (
                    <p className={styles.error}>{errors["types"]}</p>
                  )}
                </div>
                {control && (
                  <div className={styles.errordiv}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      margin="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      color="rgb(223, 78, 78)"
                    >
                      <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
                    </svg>
                    <p className={styles.errormessage}>
                      Complete the form correctly
                    </p>
                  </div>
                )}
                <div className={styles.next}>
                  <button
                    onClick={() => setTab("pokedex")}
                    className={styles.buttprev}
                  >
                    cancel
                  </button>
                  <button
                    className={styles.butt}
                    onClick={changePage}
                    id="next"
                  >
                    next
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.nextdiv}>
                <p className={styles.p}>Choose your image:</p>
                <div className={styles.imgdiv}>
                  <DefaultImages
                    onClick={handleChange}
                    currentImg={currentImg}
                    setCurrentImg={setCurrentImg}
                  />
                </div>
                <div className={styles.next}>
                  {Object.keys(errors).length === 0 ? (
                    <button type="submit" className={styles.butt}>
                      Lets create{" "}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className={styles.buttdisabled}
                      disabled
                    >
                      Lets create{" "}
                    </button>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePokemon;
