import { setIsOpenModalUpdateProduct } from "@/store/reducers/ModalUpdateProduct"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import styles from './styles.module.css'
import { useEffect, useState } from "react"
import { updateProduct, useFetchAdminProductByIdQuery } from "@/api"
import { editProduct } from "@/store/reducers/Admin"

export const ModalUpdateProduct = () => {
    const dispatch = useDispatch()
    const {
        modalUpdateProduct: {
            isOpen, productId
        },
        admin: {
            products
        }
    } = useSelector(state => state)

    const initialProduct = products.find(product => product.id === productId)
    console.log('Update initial', initialProduct)

    useEffect(() => {
        if (initialProduct) {
            setProduct(initialProduct);
        }
    }, [initialProduct]);


    const [product, setProduct] = useState()

    const handleCancel = () => {
        dispatch(setIsOpenModalUpdateProduct(false))
    }

    const handleChangeInput = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await updateProduct(product)
            dispatch(setIsOpenModalUpdateProduct(false))
            dispatch(editProduct(product))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal open={isOpen} onCancel={handleCancel} footer={null}>
            {/* {
                !isLoading ? (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h1 className={styles.headerForm}>Update product</h1>
                        <div className={styles.inputs}>
                            <div className={styles.inputBox}>
                                <input value={product?.name} onChange={handleChangeInput} type="text" name="name" id="name" className={styles.input} placeholder=" " />
                                <label htmlFor="name" className={styles.flyingPlaceholder}>Name</label>
                            </div>
                            <div className={styles.inputBox}>
                                <input value={product?.price} onChange={handleChangeInput} type="text" name="price" id="price" className={styles.input} placeholder=" " />
                                <label htmlFor="price" className={styles.flyingPlaceholder}>Price</label>
                            </div>
                            <div className={styles.inputBox}>
                                <input value={product?.composition} onChange={handleChangeInput} type="text" name="composition" id="composition" className={styles.input} placeholder=" " />
                                <label htmlFor="composition" className={styles.flyingPlaceholder}>Composition</label>
                            </div>
                            <div className={styles.inputBox}>
                                <input value={product?.category} onChange={handleChangeInput} type="text" name="category" id="category" className={styles.input} placeholder=" " />
                                <label htmlFor="category" className={styles.flyingPlaceholder}>Category</label>
                            </div>
                            <div className={styles.inputBox}>
                                <input value={product?.photo} onChange={handleChangeInput} type="text" name="photo" id="photo" className={styles.input} placeholder=" " />
                                <label htmlFor="photo" className={styles.flyingPlaceholder}>Photo</label>
                            </div>
                        </div>
                        <button type="submit" className={styles.btnSubmit}>Submit</button>
                    </form>
                ) : (
                    <span>Loading</span>
                )
            } */}

            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.headerForm}>Update product</h1>
                <div className={styles.inputs}>
                    <div className={styles.inputBox}>
                        <input value={product?.name} onChange={handleChangeInput} type="text" name="name" id="name" className={styles.input} placeholder=" " />
                        <label htmlFor="name" className={styles.flyingPlaceholder}>Name</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input value={product?.price} onChange={handleChangeInput} type="text" name="price" id="price" className={styles.input} placeholder=" " />
                        <label htmlFor="price" className={styles.flyingPlaceholder}>Price</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input value={product?.composition} onChange={handleChangeInput} type="text" name="composition" id="composition" className={styles.input} placeholder=" " />
                        <label htmlFor="composition" className={styles.flyingPlaceholder}>Composition</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input value={product?.category} onChange={handleChangeInput} type="text" name="category" id="category" className={styles.input} placeholder=" " />
                        <label htmlFor="category" className={styles.flyingPlaceholder}>Category</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input value={product?.photo} onChange={handleChangeInput} type="text" name="photo" id="photo" className={styles.input} placeholder=" " />
                        <label htmlFor="photo" className={styles.flyingPlaceholder}>Photo</label>
                    </div>
                </div>
                <button type="submit" className={styles.btnSubmit}>Submit</button>
            </form>
        </Modal>
    )
}