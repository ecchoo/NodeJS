import { Link } from 'react-router-dom'
import { BASKET, HOME, PROFILE } from '@/constants/routes';
import { Logo } from '../Logo';
import { NavMenu } from '../NavMenu';
import ProfileSvg from '../svg/ProfileSvg';
import BasketSvg from '../svg/BasketSvg';
import styles from './styles.module.css'


export const Header = () => {
    return(
        <header>
            <div className={styles.container}>
                <div className={styles.headerNav}>
                    <NavMenu />
                    {/* <div className={styles.logo}>
                        <Link to={HOME}>Pizzazz Pizza</Link> 
                    </div> */}
                    <Logo/>
                    <div className={styles.profile}>
                        <Link to={PROFILE}>
                            <ProfileSvg/>
                        </Link>
                        <Link to={BASKET}>
                            <BasketSvg/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
