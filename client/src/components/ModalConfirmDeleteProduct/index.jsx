import { deleteProduct } from "@/api"
import { removeProduct } from "@/store/reducers/Admin"
import { setIsOpenModalConfirmDeleteProduct } from "@/store/reducers/ModalConfirmDeleteProduct"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"

export const ModalConfirmDeleteProduct = () => {
    const dispatch = useDispatch()

    const { modalConfirmDeleteProduct: { isOpen, productId } } = useSelector(state => state)

    const handleCancel = () => {
        dispatch(setIsOpenModalConfirmDeleteProduct(false))
    }

    const handleOk = async () => {
        try {
            const data = await deleteProduct(productId)
            console.log(data)
            dispatch(setIsOpenModalConfirmDeleteProduct(false))
            dispatch(removeProduct(productId))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal onCancel={handleCancel} onOk={handleOk} open={isOpen}>
            <h1>Вы действительно хотите удалить продукт?</h1>
        </Modal>
    )
}