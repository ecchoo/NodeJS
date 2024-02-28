import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { createAddress, updateAddress, useFetchProfileQuery } from '@/api';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../Input';
import { StatusCodes } from 'http-status-codes';
import { convertErrorsValidation } from '@/utils/convertErrorsValidation';
import { setAddress } from '@/store/reducers';
import { toast } from 'react-toastify';

export const FormAddress = () => {
    const dispatch = useDispatch()
    const {
        user: { token },
        address
    } = useSelector(state => state)

    const [newAddress, setNewAddress] = useState()

    const [errorsValidation, setErrorsValidation] = useState()

    useEffect(() => {
        if (address) {
            console.log(address)
            setNewAddress(address)
        } else {
            setNewAddress({
                city: null,
                street: null,
                numberHouse: null,
                building: null,
                structure: null,
                fraction: null,
                numberApartament: null
            })
        }
    }, [address])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (Object.values(address).every(value => value === null)) {
                await createAddress({ ...newAddress, token })
                toast('Адрес успешно добавлен')
            } else {
                await updateAddress({ ...newAddress, token })
                toast('Адрес успешно изменен')
            }

            dispatch(setAddress(newAddress))
        } catch (err) {
            if (err.response.status === StatusCodes.UNPROCESSABLE_ENTITY) {
                const convertedErrors = convertErrorsValidation(err.response.data.errors)
                setErrorsValidation(convertedErrors)
                return
            } 

            return toast('При обновлении адреса произошла ошибка')
        }

    }

    const handleChangeInput = (e) => {
        let value = e.target.value

        if (!e.target.value) {
            value = null
        }

        setNewAddress({
            ...newAddress,
            [e.target.name]: value
        })
    }

    return (
        <form className={styles.formAddress} onSubmit={handleSubmit}>
            <h1 className={styles.headerFormAddress}>Address</h1>
            <div className={styles.inputs}>
                <Input
                    name="city"
                    type='text'
                    placeholder='City'
                    value={newAddress?.city}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.city}
                />
                <Input
                    name="street"
                    type='text'
                    placeholder='Street'
                    value={newAddress?.street}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.street}
                />
                <Input
                    name="numberHouse"
                    type='text'
                    placeholder='Number house'
                    value={newAddress?.numberHouse}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.numberHouse}
                />
                <div className={styles.rowInputs}>
                    <Input
                        name="building"
                        type='text'
                        placeholder='Building'
                        value={newAddress?.building}
                        onChange={handleChangeInput}
                        errorValidation={errorsValidation?.building}
                    />
                    <Input
                        name="structure"
                        type='text'
                        placeholder='Structure'
                        value={newAddress?.structure}
                        onChange={handleChangeInput}
                        errorValidation={errorsValidation?.structure}
                    />
                    <Input
                        name="fraction"
                        type='text'
                        placeholder='Fraction'
                        value={newAddress?.fraction}
                        onChange={handleChangeInput}
                        errorValidation={errorsValidation?.fraction}
                    />
                </div>
                <Input
                    name="numberApartament"
                    type='text'
                    placeholder='Number apartament'
                    value={newAddress?.numberApartament}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.numberApartament}
                />
            </div>
            <button className={styles.btnSubmitAddress} type="submit">Submit</button>
        </form>
    );
};
