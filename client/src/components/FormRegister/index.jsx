import { useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { useState } from 'react'
import { register } from '@/api/auth'
import { setActiveForm, setIsOpen } from '@/store/reducers/AuthModal'
import { AUTH_FORMS } from '@/constants/authForms'
import { setUser } from '@/store/reducers'

export const FormRegister = () => {
    const dispatch = useDispatch()  

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await register(registerData)
        console.log(data)
        dispatch(setUser(data))
        dispatch(setIsOpen(false))
    }

    const handleChangeInput = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        })
    }

    const handleClickLogin = () => {
        dispatch(setActiveForm(AUTH_FORMS.LOGIN))
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.headerForm}>Register</h1>
            <div className={styles.inputs}>
                <div className={styles.inputBox}>
                    <input onChange={handleChangeInput} type="text" name="name" id="name" className={styles.input} placeholder=" " />
                    <label htmlFor="name" className={styles.flyingPlaceholder}>Name</label>
                </div>
                <div className={styles.inputBox}>
                    <input onChange={handleChangeInput} type="email" name="email" id="email" className={styles.input} placeholder=" " />
                    <label htmlFor="email" className={styles.flyingPlaceholder}>Email</label>
                </div>
                <div className={styles.inputBox}>
                    <input onChange={handleChangeInput} type="password" name="password" id="password" className={styles.input} placeholder=" " />
                    <label htmlFor="password" className={styles.flyingPlaceholder}>Password</label>
                </div>
                <div className={styles.inputBox}>
                    <input onChange={handleChangeInput} type="password" name="passwordConfirm" id="passwordConfirm" className={styles.input} placeholder=" " />
                    <label htmlFor="passwordConfirm" className={styles.flyingPlaceholder}>Confirm password</label>
                </div>
            </div>
            <button className={styles.btnSubmit} type="submit">Register</button>
            <button onClick={handleClickLogin} className={styles.login}>Login</button>
        </form>
    )
}