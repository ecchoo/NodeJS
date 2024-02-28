import { setIsOpenModalUpdateProduct } from "@/store/reducers/ModalUpdateProduct"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import styles from './styles.module.css'
import { useEffect, useState } from "react"
import { updateProduct, useFetchAdminCategoriesQuery } from "@/api"
import { editProduct } from "@/store/reducers/Admin"
import { Select } from "../Select"
import { Input } from "../Input"
import { UploadOutlined } from '@ant-design/icons';
import { StatusCodes } from "http-status-codes"
import { convertErrorsValidation } from "@/utils/convertErrorsValidation"
import { toast } from "react-toastify"


export const ModalUpdateProduct = () => {
    const dispatch = useDispatch()
    const { data, isLoading } = useFetchAdminCategoriesQuery()

    const selectCategoryOptions = !isLoading && data.map(category => ({
        value: category.name,
        label: `${category.name.slice(0, 1).toUpperCase()}${category.name.slice(1)}`
    }))
    const {
        modalUpdateProduct: {
            isOpen, productId
        },
        admin: {
            products
        },
        user: {
            token
        }
    } = useSelector(state => state)

    const initialProduct = products.find(product => product.id === productId)


    useEffect(() => {
        if (initialProduct) {
            setProduct(initialProduct);
        }
    }, [initialProduct]);


    const [product, setProduct] = useState()
    const [errorsValidation, setErrorsValidation] = useState()

    const handleCancel = () => {
        dispatch(setIsOpenModalUpdateProduct(false))
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
        if (!file) return

        setProduct({
            ...product,
            photo: file.name
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await updateProduct(token, product)
            dispatch(setIsOpenModalUpdateProduct(false))
            dispatch(editProduct(product))
            setErrorsValidation({})

            toast('Продукт успешно обновлен')
        } catch (err) {
            if (err?.response?.status === StatusCodes.UNPROCESSABLE_ENTITY) {
                const convertedErrors = convertErrorsValidation(err.response.data.errors)
                setErrorsValidation(convertedErrors)
                return
            }

            toast('Не удалось обновить продукт')
            console.log(err)
        }
    }

    return (
        <>
            {!isLoading ? (
                <Modal open={isOpen} onCancel={handleCancel} footer={null}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h1 className={styles.headerForm}>Update product</h1>
                        <div className={styles.inputs}>
                            <Input
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={product?.name}
                                onChange={handleChangeInput}
                                errorValidation={errorsValidation?.name}
                            />
                            <Input
                                type='text'
                                name='price'
                                placeholder='Price'
                                value={product?.price}
                                onChange={handleChangeInput}
                                errorValidation={errorsValidation?.price}
                            />
                            <Input
                                type='text'
                                name='composition'
                                placeholder='Composition'
                                value={product?.composition}
                                onChange={handleChangeInput}
                                errorValidation={errorsValidation?.composition}
                            />
                            <Select
                                label='Category'
                                options={selectCategoryOptions}
                                onChange={handleChangeSelect}
                                defaultValue={product?.category}
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
            ) : (
                null
            )}
        </>

    )
}