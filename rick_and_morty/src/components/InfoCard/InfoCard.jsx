/* eslint-disable jsx-a11y/alt-text */
import styles from './InfoCard.module.css'

export default function InfoCard({character}){
    
    return (
        <div className={styles.div}>
            <p className={styles.title}>here is the objetive information:</p>
            <div className={styles.container}>
            
            <div className={styles.divimg}>
                <img src={character.image} className={styles.img}/>
            </div>
            <div className={styles.divinfo}>
                <p>name: <span>{character.name}</span></p>
                <p>status: <span>{character.status}</span></p>
                <p>specie: <span>{character.species}</span></p>
                <p>gender: <span>{character.gender}</span></p>
                <p>origin: <span>{character.origin}</span></p>
            </div>
        </div>
    </div>
    )
}