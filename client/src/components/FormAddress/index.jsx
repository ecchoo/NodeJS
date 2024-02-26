import React, { useState } from 'react';
import styles from './styles.module.css';
import { createAddress, updateAddress, useFetchProfileQuery } from '@/api';
import { useSelector } from 'react-redux';
import { Input } from '../Input';
import { StatusCodes } from 'http-status-codes';
import { convertErrorsValidation } from '@/utils/convertErrorsValidation';

export const FormAddress = ({ initialAddress }) => {
    const { user: { token } } = useSelector(state => state)

    const [address, setAddress] = useState(initialAddress || {
        city: null,
        street: null,
        numberHouse: null,
        building: null,
        structure: null,
        fraction: null,
        numberApartament: null
    })

    const [errorsValidation, setErrorsValidation] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            if (!initialAddress) {
                return await createAddress({ ...address, token })
            }

            return await updateAddress({ ...address, token })
        } catch (err) {
            if (err.response.status === StatusCodes.UNPROCESSABLE_ENTITY) {
                const convertedErrors = convertErrorsValidation(err.response.data.errors)
                setErrorsValidation(convertedErrors)
            }
        }

    }

    const handleChangeInput = (e) => {
        let value = e.target.value

        if (!e.target.value) {
            value = null
        }

        setAddress({
            ...address,
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
                    value={address?.city}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.city}
                />
                <Input
                    name="street"
                    type='text'
                    placeholder='Street'
                    value={address?.street}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.street}
                />
                <Input
                    name="numberHouse"
                    type='text'
                    placeholder='Number house'
                    value={address?.numberHouse}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.numberHouse}
                />
                <div className={styles.rowInputs}>
                    <Input
                        name="building"
                        type='text'
                        placeholder='Building'
                        value={address?.building}
                        onChange={handleChangeInput}
                        errorValidation={errorsValidation?.building}
                    />
                    <Input
                        name="structure"
                        type='text'
                        placeholder='Structure'
                        value={address?.structure}
                        onChange={handleChangeInput}
                        errorValidation={errorsValidation?.structure}
                    />
                    <Input
                        name="fraction"
                        type='text'
                        placeholder='Fraction'
                        value={address?.fraction}
                        onChange={handleChangeInput}
                        errorValidation={errorsValidation?.fraction}
                    />
                </div>
                <Input
                    name="numberApartament"
                    type='text'
                    placeholder='Number apartament'
                    value={address?.numberApartament}
                    onChange={handleChangeInput}
                    errorValidation={errorsValidation?.numberApartament}
                />
            </div>
            <button className={styles.btnSubmitAddress} type="submit">Submit</button>
        </form>
    );
};
