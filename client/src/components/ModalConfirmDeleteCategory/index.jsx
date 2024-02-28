import { deleteCategory } from "@/api"
import { removeCategory } from "@/store/reducers/Admin"
import { setIsOpenModalConfirmDeleteCategory } from "@/store/reducers/ModalConfirmDeleteCategory"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"

export const ModalConfirmDeleteCategory = () => {
    const dispatch = useDispatch()

    const {
        modalConfirmDeleteCategory: {
            isOpen, categoryId
        },
        user: {
            token
        }
    } = useSelector(state => state)

    const handleCancel = () => {
        dispatch(setIsOpenModalConfirmDeleteCategory(false))
    }

    const handleOk = async () => {
        try {
            await deleteCategory(token, categoryId)
            dispatch(setIsOpenModalConfirmDeleteCategory(false))
            dispatch(removeCategory(categoryId))

            toast('Категория успешно удалена')
        } catch (err) {
            toast('Не удалось удалить категорию')
            console.log(err)
        }
    }

    return (
        <Modal onCancel={handleCancel} onOk={handleOk} open={isOpen}>
            <h1>Вы действительно хотите удалить категорию?</h1>
        </Modal>
    )
}