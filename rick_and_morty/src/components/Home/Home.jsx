import axios from 'axios' //npm install axios
import styles from './Home.module.css';
import {useState,useEffect} from 'react'; //useState guarda info, necesita una variable y una funcion que setea la variable 
import Cards from '../Cards/Cards';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../Navigation/MobileNavigation';
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


function Home(){
    const [character,setCharacters] = useState([]); //en la primera parte usamos destructuring, donde ponemos el nombre dek dato
    //y una funcion que sera la que modificara el dato (solo le ponemos el nombre, donde vamos a pasar la info donde guardaremmos
    //o pisaremos la info en useState), useState solo recibira informacion a partir de su funcion setCharacter.
    //useEffect es otro hook que interviene en ciertos momentos, se puede llegar a ejecuar en 3 momentos claves
    //uno es cuando se renderiza el componente, (generalmente se usa aca) el useEffect viene a replazar a component didMount,willUnmount
    //otro en el momento que llame a una funcion (crear un nuevo pokemon en el pi de diego por ejemplo), para que cada vez que se dispare
    //la funcion el useEffect vuelva a renderizar
    //otro seria cuando se desmonta un componente
    const[search,setSearch] = useState([]); //ahora ponemos estados para el buscador
    const[species,setSpecies] = useState([]);
    const[status,setStatus] = useState([]);

    useEffect(()=>{
        let characters = getCharacters();
        //setCharacter(characters); //guardamos en character, lo que returna la llamada a la funcion
        characters.then(r=>{
          setCharacters(r)
          setSearch(r)
          setStatus(statuses(r))
          setSpecies(specieses(r))
        })
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[]) //el array monitorea los cambios de lo que este dentro del array, si el array esta vacia solo se aplica cuando se monta el componente

    async function getCharacters (){
       
          const api = await axios.get(`https://rickandmortyapi.com/api/character/`);
          return (api.data.results) //devuelve una promesa asincrona
        
    }
    
    function handleInputChange(event){
      const eventoValue = event.target.value;
      let filtered = character.filter((element)=>{
        return element.name.toLowerCase().includes(eventoValue.toLowerCase())
      })
      setSearch(filtered)
    }
    
    function statuses(character){
      let obj ={};
      character?.forEach(element => {
        if(!obj[element.status]){
          obj[element.status] = 1;
        }
      });
      return Object.keys(obj);
    }

    function specieses(character){
      let obj ={};
      character?.forEach(element => {
        if(!obj[element.species]){
          obj[element.species] = 1;
        }
      });
      return Object.keys(obj);
    }
    

    return (
      <div className={styles.home}>
        <Navigation onChange={handleInputChange} status={status} species={species} setSearch={setSearch} character={character}/>
        <MobileNavigation onChange={handleInputChange} status={status} species={species} setSearch={setSearch} character={character}/>
        <div className={styles.cardsPresent}>
          <Cards char={search}/>
        </div>
        <footer className={styles.footer}>
          <p className={styles.footerp}>Project carried out with the sole purpose of developing my skills, for more information about me:  
            <a href='https://www.instagram.com/fcastroagus/?hl=es' target="_blank" className={styles.footerig}><BsInstagram size='20px'/></a>
            <a href='https://www.linkedin.com/in/agus-castro-3aa044219/' target="_blank" className={styles.footerli}><BsLinkedin size='20px' /></a>
          </p>
        </footer>
      </div>
    )
  }



  export default Home;