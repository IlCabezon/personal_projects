/* eslint-disable jsx-a11y/alt-text */
import styles from './MobileNavigation.module.css';
import {NavLink} from 'react-router-dom';
import {AiOutlineMenuFold} from 'react-icons/ai'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {CgMenuCake} from 'react-icons/cg'
import {CgMenuCheese} from 'react-icons/cg'
import { useState} from 'react';
import Filter from '../Filter/Filter';


export default function MobileNavigation({onChange,status,species,setSearch,character}){
const [open,setOpen] = useState(false);
const [filters,setFilters] = useState(false);


    const openMenue = <AiOutlineMenuFold className={styles.menue} onClick={()=> setOpen(!open)} size='55px' color='gray'/>;

    const closeMenue = <AiOutlineMenuUnfold className={styles.menue} onClick={()=> setOpen(!open)} size='55px' color='gray'/>

    const openFilter = <CgMenuCheese className={styles.filters} onClick={()=>setFilters(!filters)} size='45px'
    color='gray'/>

    const closeFilter = <CgMenuCake className={styles.filters} onClick={()=>setFilters(!filters)} size='45px'
    color='gray'/>
  

    return (
         <nav className={styles.nav}>

           <input type='text' className={styles.searchBar} placeholder='Ingrese su busqueda' onChange={onChange}></input>

            {!open ? openMenue : closeMenue}
            

            {open && 
            <ul className={styles.menueElements}>
               
                <li className={styles.toHome}><NavLink to='/' className={styles.home}>
                    land <img className={styles.spinPortal} ></img>
                </NavLink></li>

                <li className={styles.toForm}><NavLink to='/Form' className={styles.create}>
                contact me
                </NavLink></li>

                <li className={styles.filter}> 
                    filter 
                    {filters ? closeFilter : openFilter}

                    {filters && 
                        
                        <Filter status={status} species={species} setSearch={setSearch} character={character}/>
                        
                    }
                </li>
                <li className={styles.filter}>
                    
                </li>
                
            </ul>}

            

        </nav>
    )  
}
