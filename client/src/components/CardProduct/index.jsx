import { Link } from "react-router-dom"
import { useState } from "react"
import styles from './styles.module.css'
import { ProductCounter } from "../ProductCounter";

export const CardProduct = ({ titleProduct, photoProduct, compositionProduct, priceProduct }) => {
    const [countProduct, setCountProduct] = useState(1);

    const handleClickPlus = () => {
        if(countProduct < 100){
            setCountProduct(countProduct + 1)
        }
    }

    const handleClickMinus = () => {
        if(countProduct > 0){
            setCountProduct(countProduct - 1)
        }
    }

    return (
        <div className={styles.cardProduct}>
            <h1 className={styles.titleProduct}>{titleProduct}</h1>
            <img src={photoProduct} alt="" />
            <h1>{compositionProduct}</h1>
            <div className={styles.cardFooter}>
                <ProductCounter 
                    value={countProduct}
                    onClickMinus={handleClickMinus}
                    onClickPlus={handleClickPlus}
                />
                <span className={styles.price}>{(priceProduct * countProduct).toFixed(1)} $</span>
            </div>
            <Link className={styles.linkChooseProduct} to='/'>Choose</Link>
        </div>
    )
}
