import { useState } from 'react'
import styles from './styles.module.css'
import { updatePersonalData } from '@/api'
import { useDispatch, useSelector } from 'react-redux'
import { setPersonalDataUser } from '@/store/reducers'
import { StatusCodes } from 'http-status-codes'
import { convertErrorsValidation } from '@/utils/convertErrorsValidation'
import { Input } from '../Input'
import { toast } from 'react-toastify'

export const FormPersonalData = () => {
    const dispatch = useDispatch()
    const { user: { token, name: initialName, email: initialEmail } } = useSelector(state => state)

    const [personalData, setPersonalData] = useState({
        name: initialName,
        email: initialEmail
    })

    const [errorsValidation, setErrorsValidation] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await updatePersonalData({ ...personalData, token })
            dispatch(setPersonalDataUser(personalData))

            toast('Личные данные успешно обновленны')
        } catch (err) {
            if (err.response.status === StatusCodes.UNPROCESSABLE_ENTITY) {
                const convertedErrors = convertErrorsValidation(err.response.data.errors)
                setErrorsValidation(convertedErrors)
                return
            }

            return toast('Не удалось обновить личные данные')
        }
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
                <Input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={personalData.email}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.email}
                />
                <Input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={personalData.name}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.name}
                />
            </div>
            <button className={styles.btnSubmit} type="submit">Submit</button>
        </form>
    )
}