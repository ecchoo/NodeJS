import { useDispatch } from 'react-redux'
import styles from './styles.module.css'
import { useState } from 'react'
import { register } from '@/api/auth'
import { setActiveForm, setIsOpen } from '@/store/reducers/AuthModal'
import { AUTH_FORMS } from '@/constants/authForms'
import { setUser } from '@/store/reducers'
import { StatusCodes } from 'http-status-codes'
import { convertErrorsValidation } from '@/utils/convertErrorsValidation'
import { Input } from '../Input'

export const FormRegister = () => {
    const dispatch = useDispatch()

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const [errorsValidation, setErrorsValidation] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const user = await register(registerData)
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
                <Input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={registerData.name}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.name}
                />
                <Input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={registerData.email}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.email}
                />
                <Input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={registerData.password}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.password}
                />
                <Input
                    type='password'
                    name='passwordConfirm'
                    placeholder='Password confirm'
                    value={registerData.passwordConfirm}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.passwordConfirm}
                />
            </div>
            <button className={styles.btnSubmit} type="submit">Register</button>
            <button onClick={handleClickLogin} className={styles.login}>Login</button>
        </form>
    )
}