import { FormAddress } from '@/components/FormAddress'
import styles from './styles.module.css'

export const Profile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.personalData}>
                <h1 className={styles.header}>Personal data</h1>
                <FormAddress />
            </div>
        </div>
    )
}