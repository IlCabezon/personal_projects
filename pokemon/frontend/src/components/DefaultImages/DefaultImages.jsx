import { useSelector } from "react-redux";
import styles from "./DefaultImages.module.css";
import Image from "../Image/Image";

const DefaultImages = ({ onClick, currentImg, setCurrentImg }) => {
  const images = useSelector((state) => state.images);
  return (
    <div className={styles.main}>
      {images?.map((e, i) => (
        <Image key={i} image={e} {...{ onClick, currentImg, setCurrentImg }} />
      ))}
    </div>
  );
};
export default DefaultImages;
