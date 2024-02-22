import { FormAddress } from '@/components/FormAddress'
import styles from './styles.module.css'
import { FormPersonalData } from '@/components/FormPersonalData'
import { logout } from '@/api/auth'
import { useNavigate } from 'react-router-dom'
import { HOME } from '@/constants/routes'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '@/store/reducers'
import { useFetchProfileQuery } from '@/api'

export const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const { user: { token } } = useSelector(state => state)

    const handleClickLogout = async () => {
        dispatch(logoutUser())
        navigate(HOME)
    }

    return (
        <div className={styles.container}>
            <div className={styles.personalData}>
                <h1 className={styles.header}>Profile</h1>
                <FormAddress />
                <FormPersonalData />
                <button onClick={handleClickLogout} className={styles.buttonLogout}>Logout</button>
            </div>
        </div>
    )
}