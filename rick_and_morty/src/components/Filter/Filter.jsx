import styles from './Filter.module.css'


export default function Filter({status,species,setSearch,character,filters, setFilters}){
   

    function handleChangeStatus(event){
        const eventoValue= event.target.value;
        //console.log(eventoValue)
        let filtered = character.filter((element)=>{
            return element.status === eventoValue;
        })
        setSearch(filtered);

    }
    function handleChangeSpecie(event){
        const eventoValue = event.target.value;
        //console.log(eventoValue)
        let filtered = character.filter((element)=>{return element.species === eventoValue})
        setSearch(filtered)
    }

    function handleClearFilters(event){
        event.preventDefault();
        setSearch(character)
    }

    return (
        <ul className={styles.ul}>
            {status.map((e)=>{
                return<li key={e.toString()} className={styles.filtros}><button className={styles.botones} value={e} onClick={handleChangeStatus}> {e} </button></li>
            })}
            {species.map((e)=>{
                return<li key={e.toString()} className={styles.filtros}><button className={styles.botones} value={e} onClick={handleChangeSpecie}> {e} </button></li>
            })}
            <li className={styles.clear}><button className={styles.clearButton} onClick={handleClearFilters}>clear filters</button></li>
            
        </ul>
    )
}