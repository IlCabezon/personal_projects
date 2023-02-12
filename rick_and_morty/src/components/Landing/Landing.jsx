import {NavLink} from 'react-router-dom';
import styles from './Landing.module.css';
import img from './portal.png'

export default function Landing(){
    return (
         <div className={styles.background}>
            <NavLink to='/home' className={styles.btn}>
                <img src={img} className={styles.imgPortal} alt='portal'/>
                <p className={styles.text}>TO HOME</p>
                
            </NavLink>
        </div>
    )
}
