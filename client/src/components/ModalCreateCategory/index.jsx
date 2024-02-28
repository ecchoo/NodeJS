import { setIsOpenModalCreateCategory } from "@/store/reducers/ModalCreateCategory"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import styles from './styles.module.css'
import { useState } from "react"
import { createCategory } from "@/api"
import { addCategory } from "@/store/reducers"
import { Input } from '@/components/Input'
import { convertErrorsValidation } from "@/utils/convertErrorsValidation"
import { StatusCodes } from "http-status-codes"
import { toast } from "react-toastify"

export const ModalCreateCategory = () => {
    const dispatch = useDispatch()
    const {
        modalCreateCategory: { isOpen },
        user: { token }
    } = useSelector(state => state)

    const [category, setCategory] = useState({ name: '' })
    const [errorsValidation, setErrorsValidation] = useState()

    const handleCancel = () => {
        dispatch(setIsOpenModalCreateCategory(false))
    }

    const handleChangeInput = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { id } = await createCategory(token, category)

            dispatch(setIsOpenModalCreateCategory(false))
            dispatch(addCategory({ ...category, id }))
            setCategory({ name: '' })
            setErrorsValidation({})

            toast('Категория успешно добавлена')
        } catch (err) {
            if (err?.response?.status === StatusCodes.UNPROCESSABLE_ENTITY) {
                const convertedErrors = convertErrorsValidation(err.response.data.errors)
                setErrorsValidation(convertedErrors)
                return
            }

            toast('Не удалось создать категорию')
            console.log(err)
        }
    }

    return (
        <Modal open={isOpen} onCancel={handleCancel} footer={null}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.headerForm}>Create category</h1>
                <Input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={category.name}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.name}
                />
                <button type="submit" className={styles.btnSubmit}>Submit</button>
            </form>
        </Modal>
    )
}