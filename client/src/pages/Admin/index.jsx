import { TableCategories } from '@/components/TableCategories';
import styles from './styles.module.css'
import { TableProducts } from '@/components/TableProducts';
import { TableUsers } from '@/components/TableUsers';

export const Admin = () => {
    return (
        <div className={styles.container}>
            {/* <TableProducts /> */}
            {/* <TableCategories /> */}
            <TableUsers />
        </div>
    )
}