import { deleteCategory } from "@/api"
import { removeCategory } from "@/store/reducers/Admin"
import { setIsOpenModalConfirmDeleteCategory } from "@/store/reducers/ModalConfirmDeleteCategory"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"

export const ModalConfirmDeleteCategory = () => {
    const dispatch = useDispatch()

    const { modalConfirmDeleteCategory: { isOpen, categoryId } } = useSelector(state => state)

    const handleCancel = () => {
        dispatch(setIsOpenModalConfirmDeleteCategory(false))
    }

    const handleOk = async () => {
        try {
            const data = await deleteCategory(categoryId)
            console.log(data)
            dispatch(setIsOpenModalConfirmDeleteCategory(false))
            dispatch(removeCategory(categoryId))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal onCancel={handleCancel} onOk={handleOk} open={isOpen}>
            <h1>Вы действительно хотите удалить категорию?</h1>
        </Modal>
    )
}