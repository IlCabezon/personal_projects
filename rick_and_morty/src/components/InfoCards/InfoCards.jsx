/* eslint-disable jsx-a11y/alt-text */
import { useState} from "react"
import InfoCard from '../InfoCard/InfoCard'
import styles from './InfoCards.module.css'
import { NavLink } from "react-router-dom";
import logo from './logo .png'
import morty from './morty.png'
import sol from './sol.png'

export default function InfoCards(){
    const [character,setCharacters] = useState([]);
    const [display,setDisplay] = useState(true);
    
    let urlId = (window.location.pathname);
    let id = urlId.substring(urlId.length-2);
   
    
    function char(){
     setDisplay(!display)
     fetch (`https://rickandmortyapi.com/api/character/${id}`)
        .then((r)=>r.json())
        .then((e)=>{
            const character = {
                id: e.id,
                name:e.name,
                status:e.status,
                species:e.species,
                gender:e.gender,
                image:e.image,
                origin:e.origin.name
            };
            return setCharacters(character);
        })      
    }
    

    return (
        <div className={styles.container}>
            
            <div className={styles.info}>
               <img src={logo} className={styles.logo} />
               <img src={morty} className={styles.morty} />
               <img src={sol} className={styles.sol} />
                {display && 
                    <p className={styles.warning}>information classified by the citadel, do you want to access the files?</p>
                }               
                    
                {display &&
                
               <div className={styles.buttons}>
                    <button onClick={char} className={styles.acces}>access</button>
                    <NavLink to='/home' className={styles.navlink}>
                    <button className={styles.denied} onClick={char}>denied</button>
                    </NavLink>
                </div>    
                }     

                {!display &&  
                    <div className={styles.charinfo}>     
                        <InfoCard character={character} />
                    </div>
                }
                {!display &&
                    <NavLink to='/home' className={styles.navlink}>    
                            <button className={styles.denied}>to home</button>
                    </NavLink>
                }
                
            </div>
        </div>
    )
}