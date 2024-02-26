import { setIsOpenModalCreateCategory } from "@/store/reducers/ModalCreateCategory"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import styles from './styles.module.css'
import { useState } from "react"
import { createCategory } from "@/api"
import { addCategory } from "@/store/reducers"

export const ModalCreateCategory = () => {
    const dispatch = useDispatch()
    const { modalCreateCategory: { isOpen } } = useSelector(state => state)

    const [category, setCategory] = useState({ name: '' })

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
            const { id } = await createCategory(category)
            dispatch(setIsOpenModalCreateCategory(false))
            dispatch(addCategory({ ...category, id }))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal open={isOpen} onCancel={handleCancel} footer={null}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.headerForm}>Create category</h1>
                <div className={styles.inputs}>
                    <div className={styles.inputBox}>
                        <input value={category.name} onChange={handleChangeInput} type="text" name="name" id="name" className={styles.input} placeholder=" " />
                        <label htmlFor="name" className={styles.flyingPlaceholder}>Name</label>
                    </div>
                </div>
                <button type="submit" className={styles.btnSubmit}>Submit</button>
            </form>
        </Modal>
    )
}