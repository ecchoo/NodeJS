import Visa from '../assets/Visa.svg'
import PayPal from '../assets/PayPal.svg'
import { useState } from 'react'
import Input from './Input'

const FormAddingBankCard = () => {
    const [numberActiveImg, setNumberActiveImg] = useState(1) // мб есть что-то умнее?
    return(
        <form className="form-adding-bank-card" onSubmit={(e) => e.preventDefault()}>
            <div className="choosing-type-bank-card">
                <div className={numberActiveImg==1? 'border active': 'border'} onClick={() => setNumberActiveImg(1)} >
                    <img src={PayPal} alt="" />  
                </div>
                <div className={numberActiveImg==2? 'border active': 'border'} onClick={() => setNumberActiveImg(2)} >
                    <img src={Visa} alt="" />
                </div>
            </div>
            <div className="inputs">
                <Input placaholder='Number bank card' id='number-bank-card' />
                <Input placaholder='Cardholder' id='cardholder' />
                <div className="row-inputs">
                    <Input placaholder='Expiration date' id='expiration-date-bank-card' />
                    <Input placaholder='CVV' id='cvv-code' />
                </div>
            </div>
            <button type="submit" className='check-out'>Check out</button>
        </form>
    )
}

export default FormAddingBankCard