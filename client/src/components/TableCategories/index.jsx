import { Space, Table } from "antd"
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setCategories } from "@/store/reducers/Admin"
import styles from './styles.module.css'
import { useFetchAdminCategoriesQuery } from "@/api/admin/categories"
import { CATEGORY_COLUMNS } from "@/constants/categoryColumns"
import { setIsOpenModalCreateCategory } from "@/store/reducers/ModalCreateCategory"
import { setIsOpenModalUpdateCategory, setUpdateCategoryId } from "@/store/reducers/ModalUpdateCategory"
import { setDeleteCategoryId, setIsOpenModalConfirmDeleteCategory } from "@/store/reducers/ModalConfirmDeleteCategory"

export const TableCategories = () => {
    const dispatch = useDispatch()
    const { admin: { categories } } = useSelector(state => state)

    const { data, isLoading } = useFetchAdminCategoriesQuery()

    useEffect(() => {
        if (!isLoading && categories) {
            dispatch(setCategories(data))
        }
    }, [data, isLoading])

    const tableColumns = [
        ...CATEGORY_COLUMNS,
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined onClick={handleClickUpdate.bind(null, record.id)} />
                    <DeleteOutlined onClick={handleClickDelete.bind(null, record.id)} />
                </Space>
            ),
        },
    ]

    const handleClickCreate = () => {
        dispatch(setIsOpenModalCreateCategory(true))
    }

    const handleClickUpdate = (categoryId) => {
        dispatch(setIsOpenModalUpdateCategory(true))
        dispatch(setUpdateCategoryId(categoryId))
    }

    const handleClickDelete = (categoryId) => {
        dispatch(setIsOpenModalConfirmDeleteCategory(true))
        dispatch(setDeleteCategoryId(categoryId))
    }

    return (
        <>
            {
                !isLoading ? (
                    <div className={styles.categories}>
                        <button className={styles.btnCreate} onClick={handleClickCreate}>Create category</button>
                        <Table columns={tableColumns} dataSource={categories}></Table>
                    </div>
                ) : (
                    <span>Loading</span>
                )
            }
        </>
    )
}