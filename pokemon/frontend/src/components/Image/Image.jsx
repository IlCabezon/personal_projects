import styles from "./Image.module.css";

const Image = ({ image, onClick, setCurrentImg, currentImg }) => {
  console.log(currentImg);
  return (
    <div className={styles.main}>
      {currentImg !== image["imgT"] ? (
        <img
          name="img"
          src={image["imgT"]}
          alt="defaultPoke"
          value={image["imgT"]}
          className={styles.img}
          onClick={(e) => onClick(e, e.target.src)}
        />
      ) : (
        <img
          name="img"
          src={image["imgT"]}
          alt="defaultPoke"
          value={image["imgT"]}
          className={styles.cimg}
          onClick={(e) => onClick(e, e.target.src)}
        />
      )}
    </div>
  );
};
export default Image;
