import { BASKET, HOME, MENU, PROFILE } from '@/constants/routes';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

export const NavMenu = ()=> {    
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClickMenu = () => {
        console.log('click')
        setIsOpen(!isOpen)
    }

    return(
        <div className={isOpen? `${styles.navigationBlock} ${styles.isOpen}`: styles.navigationBlock} onClick={handleClickMenu}>
            <div className={styles.hamburgerMenu}>
                <div className={`${styles.bar} ${styles.upperBar}`}></div>
                <div className={`${styles.bar} ${styles.middleBar}`}></div>
                <div className={`${styles.bar} ${styles.lowerBar}`}></div>
            </div>
            <div className={styles.menuList}>
                <ul>
                    <li> <Link to={HOME}>Home</Link></li>
                    <li> <Link to={MENU}>Menu</Link></li>
                    <li> <Link to={BASKET}>Basket</Link></li>
                    <li> <Link to={PROFILE}>Profile</Link></li>
                </ul>
            </div>
            <div className={styles.menuBackground}></div>
        </div>
    )
}