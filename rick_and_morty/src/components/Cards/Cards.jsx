import styles from './Cards.module.css';
import Card from '../Card/Card'



export default function Cards ({char}){

    return (
        <div className={styles.cards}>
         
            {char.map((character)=>{
            return (
            <Card 
             key={character.id}
             characterId={character.id}
             name={character.name}
             status={character.status} 
             especies={character.species} 
             image={character.image}/>
            
             )
            })}
            
    </div>
    )
}