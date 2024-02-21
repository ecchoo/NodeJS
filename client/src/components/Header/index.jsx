import { Link } from 'react-router-dom'
import { BASKET, HOME, PROFILE } from '@/constants/routes';
import { Logo } from '../Logo';
import { NavMenu } from '../NavMenu';
import ProfileSvg from '../svg/ProfileSvg';
import BasketSvg from '../svg/BasketSvg';
import styles from './styles.module.css'
import { useDispatch } from 'react-redux';
import { setIsOpen } from '@/store/reducers/AuthModal';
import { useAuth } from '@/hooks/useAuth';


export const Header = () => {
    const dispatch = useDispatch()
    const { isAuth } = useAuth()


    const handleClickAuth = () => {
        dispatch(setIsOpen(true))
    }

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.headerNav}>
                    <NavMenu />
                    <Logo />
                    <div className={styles.profile}>
                        {
                            isAuth ? (
                                <>
                                    <Link to={PROFILE}>
                                        <ProfileSvg />
                                    </Link>
                                    <Link to={BASKET}>
                                        <BasketSvg />
                                    </Link>
                                </>
                            ) : (
                                <button onClick={handleClickAuth}><ProfileSvg /></button>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
