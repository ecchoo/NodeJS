import { setIsOpenModalCreateProduct } from "@/store/reducers/ModalCreateProduct"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import styles from './styles.module.css'
import { useState } from "react"
import { createProduct } from "@/api"
import { addProduct } from "@/store/reducers"

export const ModalCreateProduct = () => {
    const dispatch = useDispatch()
    const { modalCreateProduct: { isOpen } } = useSelector(state => state)

    const [product, setProduct] = useState({
        name: '',
        price: 0,
        composition: '',
        category: '',
        photo: '',
    })

    const handleCancel = () => {
        dispatch(setIsOpenModalCreateProduct(false))
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
            const { id } = await createProduct(product)
            dispatch(setIsOpenModalCreateProduct(false))
            dispatch(addProduct({ ...product, id }))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal open={isOpen} onCancel={handleCancel} footer={null}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.headerForm}>Create product</h1>
                <div className={styles.inputs}>
                    <div className={styles.inputBox}>
                        <input value={product.name} onChange={handleChangeInput} type="text" name="name" id="name" className={styles.input} placeholder=" " />
                        <label htmlFor="name" className={styles.flyingPlaceholder}>Name</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input value={product.price} onChange={handleChangeInput} type="text" name="price" id="price" className={styles.input} placeholder=" " />
                        <label htmlFor="price" className={styles.flyingPlaceholder}>Price</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input value={product.composition} onChange={handleChangeInput} type="text" name="composition" id="composition" className={styles.input} placeholder=" " />
                        <label htmlFor="composition" className={styles.flyingPlaceholder}>Composition</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input value={product.category} onChange={handleChangeInput} type="text" name="category" id="category" className={styles.input} placeholder=" " />
                        <label htmlFor="category" className={styles.flyingPlaceholder}>Category</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input value={product.photo} onChange={handleChangeInput} type="text" name="photo" id="photo" className={styles.input} placeholder=" " />
                        <label htmlFor="photo" className={styles.flyingPlaceholder}>Photo</label>
                    </div>
                </div>
                <button type="submit" className={styles.btnSubmit}>Submit</button>
            </form>
        </Modal>
    )
}