import { setIsOpenModalCreateProduct } from "@/store/reducers/ModalCreateProduct"
import { Form, Modal, Upload, message } from "antd"
import { useDispatch, useSelector } from "react-redux"
import styles from './styles.module.css'
import { useState } from "react"
import { createProduct, useFetchAdminCategoriesQuery } from "@/api"
import { addProduct } from "@/store/reducers"
import { Input } from "../Input"
import { Select } from "../Select"
import { StatusCodes } from "http-status-codes"
import { convertErrorsValidation } from "@/utils/convertErrorsValidation"
import { toast } from "react-toastify"
import { UploadOutlined } from '@ant-design/icons';

export const ModalCreateProduct = () => {
    const dispatch = useDispatch()
    const { data, isLoading } = useFetchAdminCategoriesQuery()

    const selectCategoryOptions = !isLoading && data.map(category => ({
        value: category.name,
        label: `${category.name.slice(0, 1).toUpperCase()}${category.name.slice(1)}`
    }))

    const {
        modalCreateProduct: {
            isOpen
        },
        user: {
            token
        }
    } = useSelector(state => state)

    const initialProduct = {
        name: '',
        price: '',
        composition: '',
        category: '',
        photo: '',
    }

    const [product, setProduct] = useState(initialProduct)
    const [errorsValidation, setErrorsValidation] = useState()

    const handleCancel = () => {
        dispatch(setIsOpenModalCreateProduct(false))
    }

    const handleChangeInput = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeSelect = (category) => {
        setProduct({
            ...product,
            category
        })
    }

    const handleSelectPhoto = (e) => {
        const file = e.target.files[0]
        if(!file) return 

        setProduct({
            ...product,
            photo: file.name
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { id } = await createProduct(token, product)
            dispatch(setIsOpenModalCreateProduct(false))
            dispatch(addProduct({ ...product, id }))
            setProduct(initialProduct)
            setErrorsValidation({})

            toast('Продукт успешно создан')
        } catch (err) {
            if (err?.response?.status === StatusCodes.UNPROCESSABLE_ENTITY) {
                const convertedErrors = convertErrorsValidation(err.response.data.errors)
                setErrorsValidation(convertedErrors)
                return
            }

            toast('Не удалось создать продукт')
            console.log(err)
        }
    }

    return (
        <Modal open={isOpen} onCancel={handleCancel} footer={null}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.headerForm}>Create product</h1>
                <div className={styles.inputs}>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={product.name}
                        onChange={handleChangeInput}
                        errorValidation={errorsValidation?.name}
                    />
                    <Input
                        type='text'
                        name='price'
                        placeholder='Price'
                        value={product.price}
                        onChange={handleChangeInput}
                        errorValidation={errorsValidation?.price}
                    />
                    <Input
                        type='text'
                        name='composition'
                        placeholder='Composition'
                        value={product.composition}
                        onChange={handleChangeInput}
                        errorValidation={errorsValidation?.composition}
                    />
                    <Select
                        label='Category'
                        options={selectCategoryOptions}
                        onChange={handleChangeSelect}
                    />
                    <div>
                        <input
                            onChange={handleSelectPhoto}
                            type="file"
                            name="photo"
                            id="photo"
                            className={styles.uploadPhoto}
                            accept="image/*"
                        />
                        <label htmlFor="photo" className={styles.labelUploadPhoto}>
                            Select photo
                            <UploadOutlined />
                        </label>
                    </div>
                </div>
                <button type="submit" className={styles.btnSubmit}>Submit</button>
            </form>
        </Modal>
    )
}