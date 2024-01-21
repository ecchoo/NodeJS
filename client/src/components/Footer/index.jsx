import { HOME, MENU } from '@/constants/routes'
import { Link } from 'react-router-dom'
// import SocialMediaIcons from './SocialMediaIcons'
import styles from './styles.module.css'
import { Logo } from '../Logo'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Logo />
                <span>Traditional Italian pizza</span>
                <nav>
                    <ul className={styles.navListFooter}>
                        <li> <Link to={HOME}>Homme</Link> </li>
                        <li> <Link to={MENU}>Pizza</Link> </li>
                        <li> <Link to={MENU}>Drinks</Link> </li>
                        <li> <Link to={MENU}>Sauces</Link> </li>
                        <li> <Link to={MENU}>Desserts</Link></li>
                    </ul>
                </nav>
                <div className='social-media-icons'>
                    {/* <SocialMediaIcons /> */}
                </div>
            </div>
        </footer>
    )
}