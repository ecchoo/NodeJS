import { useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { useState } from 'react'
import { login } from '@/api/auth'
import { setActiveForm, setIsOpen } from '@/store/reducers/AuthModal'
import { AUTH_FORMS } from '@/constants/authForms'
import { setUser } from '@/store/reducers'

export const FormLogin = () => {
    const dispatch = useDispatch()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await login(loginData)
        console.log('Login data', data.token)
        dispatch(setIsOpen(false))
        dispatch(setUser(data))
    }

    const handleChangeInput = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const handleClickRegister = () => {
        dispatch(setActiveForm(AUTH_FORMS.REGISTER))
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.headerForm}>Login</h1>
            <div className={styles.inputs}>
                <div className={styles.inputBox}>
                    <input onChange={handleChangeInput} type="email" name="email" id="email" className={styles.input} placeholder=" " />
                    <label htmlFor="email" className={styles.flyingPlaceholder}>Email</label>
                </div>
                <div className={styles.inputBox}>
                    <input onChange={handleChangeInput} type="password" name="password" id="password" className={styles.input} placeholder=" " />
                    <label htmlFor="password" className={styles.flyingPlaceholder}>Password</label>
                </div>
            </div>
            <button className={styles.btnSubmit} type="submit">Login</button>
            <button onClick={handleClickRegister} className={styles.register}>Register</button>
        </form>
    )
}