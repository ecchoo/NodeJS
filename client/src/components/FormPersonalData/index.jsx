import { useState } from 'react'
import styles from './styles.module.css'
import { updatePersonalData } from '@/api'
import { useDispatch, useSelector } from 'react-redux'
import { setPersonalDataUser } from '@/store/reducers'

export const FormPersonalData = () => {
    const dispatch = useDispatch()
    const { user: { token, name: initialName, email: initialEmail } } = useSelector(state => state)

    const [personalData, setPersonalData] = useState({ name: initialName, email: initialEmail })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await updatePersonalData({ ...personalData, token })
        dispatch(setPersonalDataUser(personalData))
    }

    const handleChangeInput = (e) => {
        setPersonalData({
            ...personalData,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.headerForm}>Personal data</h1>
            <div className={styles.inputs}>
                <div className={styles.inputBox}>
                    <input value={personalData.name} onChange={handleChangeInput} type="text" name="name" id="name" className={styles.input} placeholder=" " />
                    <label htmlFor="name" className={styles.flyingPlaceholder}>Name</label>
                </div>
                <div className={styles.inputBox}>
                    <input value={personalData.email} onChange={handleChangeInput} type="email" name="email" id="email" className={styles.input} placeholder=" " />
                    <label htmlFor="email" className={styles.flyingPlaceholder}>Email</label>
                </div>
            </div>
            <button className={styles.btnSubmit} type="submit">Submit</button>
        </form>
    )
}