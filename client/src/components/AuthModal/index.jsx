import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { setIsOpen } from "@/store/reducers/AuthModal"
import { AuthModalContent } from "../AuthModalContent"

export const AuthModal = () => {
    const dispath = useDispatch()
    const { authModal: { isOpen } } = useSelector(state => state)

    const handleCancel = () => {
        dispath(setIsOpen(false))
    }

    return (
        <Modal open={isOpen} onCancel={handleCancel} footer={null}>
            <AuthModalContent />
        </Modal>
    )
}