import React, { useState } from 'react';
import styles from './styles.module.css';
import { createAddress, updateAddress, useFetchProfileQuery } from '@/api';
import { useSelector } from 'react-redux';

export const FormAddress = () => {
    const { data, isLoading } = useFetchProfileQuery()
    const { user: { token } } = useSelector(state => state)

    const [address, setAddress] = useState(data?.address || {
        city: null,
        street: null,
        numberHouse: null,
        building: null,
        structure: null,
        fraction: null,
        numberApartament: null
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!data.address) {
                console.log('create')
                return await createAddress({ ...address, token })
            }
            console.log('update')
            return await updateAddress({ ...address, token })
        } catch (err) {
            console.log(err)
        }

    }

    const handleChangeInput = (e) => {
        let value = e.target.value

        if(!e.target.value){
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
                <div className={styles.inputBox}>
                    <input value={address.city || ''} onChange={handleChangeInput} type="text" name="city" id="city" className={styles.input} placeholder=" " />
                    <label htmlFor="city" className={styles.flyingPlaceholder}>City</label>
                </div>
                <div className={styles.inputBox}>
                    <input value={address.street || ''} onChange={handleChangeInput} type="text" name="street" id="street" className={styles.input} placeholder=" " />
                    <label htmlFor="street" className={styles.flyingPlaceholder}>Street</label>
                </div>
                <div className={styles.inputBox}>
                    <input value={address.numberHouse || ''} onChange={handleChangeInput} type="text" name="numberHouse" id="numberHouse" className={styles.input} placeholder=" " />
                    <label htmlFor="numberHouse" className={styles.flyingPlaceholder}>Number house</label>
                </div>
                <div className={styles.rowInputs}>
                    <div className={styles.inputBox}>
                        <input value={address.building || ''} onChange={handleChangeInput} type="text" name="building" id="building" className={styles.input} placeholder=" " />
                        <label htmlFor="building" className={styles.flyingPlaceholder}>Building</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input value={address.structure || ''} onChange={handleChangeInput} type="text" name="structure" id="structure" className={styles.input} placeholder=" " />
                        <label htmlFor="structure" className={styles.flyingPlaceholder}>Structure</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input value={address.fraction || ''} onChange={handleChangeInput} type="text" name="fraction" id="fraction" className={styles.input} placeholder=" " />
                        <label htmlFor="fraction" className={styles.flyingPlaceholder}>Fraction</label>
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <input value={address.numberApartament || ''} onChange={handleChangeInput} type="text" name="numberApartament" id="numberApartament" className={styles.input} placeholder=" " />
                    <label htmlFor="numberApartament" className={styles.flyingPlaceholder}>Number apartament</label>
                </div>
            </div>
            <button className={styles.btnSubmitAddress} type="submit">Submit</button>
        </form>
    );
};
