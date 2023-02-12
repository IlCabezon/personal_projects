import styles from "./Loading.module.css";
import { useHelper } from "./useHelper";

const Loading = () => {
  const { image, description } = useHelper();
  return (
    <div className={styles.main}>
      <div className={styles.module}>
        <img src={image} alt="pokenimation" className={styles.img} />
        <div className={styles.dialog}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
