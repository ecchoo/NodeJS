import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '@/api/auth'
import { setActiveForm, setIsOpen } from '@/store/reducers/AuthModal'
import { AUTH_FORMS } from '@/constants/authForms'
import { setUser } from '@/store/reducers'
import styles from './styles.module.css'
import { Input } from '../Input'
import { StatusCodes } from 'http-status-codes'
import { convertErrorsValidation } from '@/utils/convertErrorsValidation'

export const FormLogin = () => {
    const dispatch = useDispatch()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [errorsValidation, setErrorsValidation] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const user = await login(loginData)
            dispatch(setIsOpen(false))
            dispatch(setUser(user))
        } catch (err) {
            if (err.response.status === StatusCodes.UNPROCESSABLE_ENTITY) {
                const convertedErrors = convertErrorsValidation(err.response.data.errors)
                setErrorsValidation(convertedErrors)
            }
        }

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
                <Input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={loginData.email}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.email}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={loginData.password}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.password}
                />
            </div>
            <button className={styles.btnSubmit} type="submit">Login</button>
            <button onClick={handleClickRegister} className={styles.register}>Register</button>
        </form>
    )
}