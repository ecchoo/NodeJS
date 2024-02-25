import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import styles from './styles.module.css'
import { useEffect, useState } from "react"
import { updateCategory, useFetchAdminCategoryByIdQuery } from "@/api"
import { editCategory } from "@/store/reducers"
import { setIsOpenModalUpdateCategory } from "@/store/reducers/ModalUpdateCategory"

export const ModalUpdateCategory = () => {
    const dispatch = useDispatch()
    const {
        modalUpdateCategory: {
            isOpen, categoryId
        },
        admin: {
            categories
        }
    } = useSelector(state => state)

    const initialCategory = categories.find(category => category.id === categoryId)

    useEffect(() => {
        if (initialCategory) {
            setCategory(initialCategory);
        }
    }, [initialCategory]);

    const [category, setCategory] = useState()

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
            await updateCategory(category)
            dispatch(setIsOpenModalUpdateCategory(false))
            dispatch(editCategory(category))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal open={isOpen} onCancel={handleCancel} footer={null}>
            {/* {
                !isLoading ? (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h1 className={styles.headerForm}>Update category</h1>
                        <div className={styles.inputs}>
                            <div className={styles.inputBox}>
                                <input value={category?.name} onChange={handleChangeInput} type="text" name="name" id="name" className={styles.input} placeholder=" " />
                                <label htmlFor="name" className={styles.flyingPlaceholder}>Name</label>
                            </div>
                        </div>
                        <button type="submit" className={styles.btnSubmit}>Submit</button>
                    </form>
                ) : (
                    <span>Loading</span>
                )
            } */}

            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.headerForm}>Update category</h1>
                <div className={styles.inputs}>
                    <div className={styles.inputBox}>
                        <input value={category?.name} onChange={handleChangeInput} type="text" name="name" id="name" className={styles.input} placeholder=" " />
                        <label htmlFor="name" className={styles.flyingPlaceholder}>Name</label>
                    </div>
                </div>
                <button type="submit" className={styles.btnSubmit}>Submit</button>
            </form>
        </Modal>
    )
}