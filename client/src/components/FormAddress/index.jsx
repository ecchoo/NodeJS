import React from 'react';
import styles from './styles.module.css';

export const FormAddress = () => {
    return (
        <form className={styles.formAddress} onSubmit={(e) => e.preventDefault()}>
            <h1 className={styles.headerFormAddress}>Address</h1>
            <div className={styles.inputs}>
                <div className={styles.inputBox}>
                    <input type="text" name="city" id="city" className={styles.input} placeholder=" " />
                    <label htmlFor="city" className={styles.flyingPlaceholder}>City</label>
                </div>
                <div className={styles.inputBox}>
                    <input type="text" name="street" id="street" className={styles.input} placeholder=" " />
                    <label htmlFor="street" className={styles.flyingPlaceholder}>Street</label>
                </div>
                <div className={styles.inputBox}>
                    <input type="text" name="house" id="house" className={styles.input} placeholder=" " />
                    <label htmlFor="house" className={styles.flyingPlaceholder}>Number house</label>
                </div>
                <div className={styles.rowInputs}>
                    <div className={styles.inputBox}>
                        <input type="text" name="building" id="building" className={styles.input} placeholder=" " />
                        <label htmlFor="building" className={styles.flyingPlaceholder}>Building</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="text" name="structure" id="structure" className={styles.input} placeholder=" " />
                        <label htmlFor="structure" className={styles.flyingPlaceholder}>Structure</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input type="text" name="fraction" id="fraction" className={styles.input} placeholder=" " />
                        <label htmlFor="fraction" className={styles.flyingPlaceholder}>Fraction</label>
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <input type="text" name="apartment" id="apartment" className={styles.input} placeholder=" " />
                    <label htmlFor="apartment" className={styles.flyingPlaceholder}>Number apartament</label>
                </div>
            </div>
            <button className={styles.btnSubmitAddress} type="submit">Submit</button>
        </form>
    );
};
