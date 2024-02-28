import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import styles from './styles.module.css'
import { useEffect, useState } from "react"
import { updateCategory, useFetchAdminCategoryByIdQuery } from "@/api"
import { editCategory } from "@/store/reducers"
import { setIsOpenModalUpdateCategory } from "@/store/reducers/ModalUpdateCategory"
import { StatusCodes } from "http-status-codes"
import { convertErrorsValidation } from "@/utils/convertErrorsValidation"
import { toast } from "react-toastify"
import { Input } from "../Input"

export const ModalUpdateCategory = () => {
    const dispatch = useDispatch()
    const {
        modalUpdateCategory: {
            isOpen, categoryId
        },
        admin: {
            categories
        },
        user: {
            token
        }
    } = useSelector(state => state)

    const initialCategory = categories.find(category => category.id === categoryId)

    useEffect(() => {
        if (initialCategory) {
            setCategory(initialCategory);
        }
    }, [initialCategory]);

    const [category, setCategory] = useState()
    const [errorsValidation, setErrorsValidation] = useState()

    const handleCancel = () => {
        dispatch(setIsOpenModalUpdateCategory(false))
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
            await updateCategory(token, category)

            dispatch(setIsOpenModalUpdateCategory(false))
            dispatch(editCategory(category))
            setErrorsValidation({})

            toast('Категория успешно обновлена')
        } catch (err) {
            if (err?.response?.status === StatusCodes.UNPROCESSABLE_ENTITY) {
                const convertedErrors = convertErrorsValidation(err.response.data.errors)
                setErrorsValidation(convertedErrors)
                return
            }

            toast('Не удалось обновить категорию')
            console.log(err)
        }
    }

    return (
        <Modal open={isOpen} onCancel={handleCancel} footer={null}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.headerForm}>Update category</h1>
                <Input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={category?.name}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.name}
                />
                <button type="submit" className={styles.btnSubmit}>Submit</button>
            </form>
        </Modal>
    )
}