import { TableCategories } from '@/components/TableCategories';
import styles from './styles.module.css'
import { TableProducts } from '@/components/TableProducts';
import { TableUsers } from '@/components/TableUsers';
import { Select } from 'antd';
import { ADMIN_TABLES, SELECT_TABLES_OPTIONS } from '@/constants/adminTables';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTable } from '@/store/reducers';

export const Admin = () => {
    const dispath = useDispatch()
    const { admin: { activeTable } } = useSelector(state => state)

    const handleChangeSelect = (value) => {
        dispath(setActiveTable(value))
    }

    return (
        <div className={styles.container}>
            <div className={styles.boxSelect}>
                <Select
                    defaultValue={ADMIN_TABLES.PRODUCTS}
                    options={SELECT_TABLES_OPTIONS}
                    onChange={handleChangeSelect}
                />
            </div>
            {activeTable == ADMIN_TABLES.PRODUCTS && <TableProducts />}
            {activeTable == ADMIN_TABLES.CATEGORIES && <TableCategories />}
            {activeTable == ADMIN_TABLES.USERS && <TableUsers />}
        </div>
    )
}