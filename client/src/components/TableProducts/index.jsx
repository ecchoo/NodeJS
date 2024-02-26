import { useFetchAdminProductsQuery } from "@/api/admin/products"
import { PRODUCT_COLUMNS } from "@/constants/productColumns"
import { setIsOpenModalCreateProduct } from "@/store/reducers/ModalCreateProduct"
import { Space, Table } from "antd"
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux"
import { setIsOpenModalUpdateProduct, setUpdateProductId } from "@/store/reducers/ModalUpdateProduct"
import { setDeleteProductid, setIsOpenModalConfirmDeleteProduct } from "@/store/reducers/ModalConfirmDeleteProduct"
import { useEffect } from "react"
import { setProducts } from "@/store/reducers/Admin"
import styles from './styles.module.css'

export const TableProducts = () => {
    const dispatch = useDispatch()
    const { admin: { products } } = useSelector(state => state)
    // console.log(products)

    const { data, isLoading } = useFetchAdminProductsQuery()

    useEffect(() => {
        if(!isLoading && !products.length){
            dispatch(setProducts(data))
        }
    }, [isLoading])

    const tableColumns = [
        ...PRODUCT_COLUMNS,
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
        dispatch(setIsOpenModalCreateProduct(true))
    }

    const handleClickUpdate = (productId) => {
        dispatch(setIsOpenModalUpdateProduct(true))
        dispatch(setUpdateProductId(productId))
    }

    const handleClickDelete = (productId) => {
        dispatch(setIsOpenModalConfirmDeleteProduct(true))
        dispatch(setDeleteProductid(productId))
    }

    return (
        <>
            {
                !isLoading ? (
                    <div className={styles.products}>
                        <button className={styles.btnCreate} onClick={handleClickCreate}>Create product</button>
                        <Table columns={tableColumns} dataSource={products}></Table>
                    </div>
                ) : (
                    <span>Loading</span>
                )
            }
        </>
    )
}