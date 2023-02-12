/* eslint-disable jsx-a11y/alt-text */
import styles from './Navigation.module.css'
import {NavLink} from 'react-router-dom';
import {CgMenuCake} from 'react-icons/cg'
import {CgMenuCheese} from 'react-icons/cg'
import { useState} from 'react';
import Filter from '../Filter/Filter';


export default function Navigation({onChange,status,species,setSearch,character}){  

    const [filters,setFilters] = useState(false);

    const openFilter = <CgMenuCheese className={styles.filters} onClick={()=>setFilters(!filters)} size='55px'
    color='gray'/>

    const closeFilter = <CgMenuCake className={styles.filters} onClick={()=>setFilters(!filters)} size='55px'
    color='gray'/>

    return (
        <nav className={styles.nav}>
            <ul className={styles.navi}>
                <li className={styles.toHome}><NavLink to='/' className={styles.home}>
                    landing
                </NavLink></li>

                <li className={styles.toForm}><NavLink to='/Form' className={styles.create}>
                    contact me
                </NavLink></li>

                <li className={styles.input}><input type='text' className={styles.searchBar} placeholder='Ingrese su busqueda' onChange={onChange}></input></li>
                
                {!filters ? openFilter : closeFilter}

                {filters && 
                    
                     <li className={styles.filter}>
                        
                        <h1 className={styles.span}>filters</h1>
                        
                        <Filter status={status} species={species} setSearch={setSearch} character={character} filters={filters} setFilter={setFilters}/>
                        
                    </li>
                }
                
            </ul>
        </nav>
    )
}