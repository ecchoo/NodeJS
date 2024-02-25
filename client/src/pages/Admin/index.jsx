import styles from './styles.module.css'
import { TableProducts } from '@/components/TableProducts';

export const Admin = () => {
    return (
        <div className={styles.container}>
            <TableProducts />
        </div>
    )
}