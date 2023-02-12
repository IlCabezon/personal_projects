import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';

export default function Card({name , status, especies, image,characterId}){
    return (
        <div className={styles.card}>
            <div className={styles.divImage}>
               <NavLink to={`/InfoCards/ ${characterId}`}>
                <img src={image} alt='character' className={styles.image}/>
               </NavLink>
            </div>
            <div className={styles.info}>
                <h2 className={styles.names}>{name}</h2>
                <p className={styles.infor}>{`Estatus: ${status}`}</p>
                <p className={styles.infor}>{`Especie: ${especies}`}</p>
               
            </div>
        </div>
    )
}