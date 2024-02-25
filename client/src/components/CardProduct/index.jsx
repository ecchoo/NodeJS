import { useState } from "react"
import styles from './styles.module.css'
import { strLimit } from "@/utils/strLimit";
import MinusSvg from "../svg/MinusSvg";
import PlusSvg from "../svg/PlusSvg";
import { addToBasket } from '@/api/basket'
import { useDispatch, useSelector } from "react-redux";
import { addProductToBasket } from "@/store/reducers";
import { useAuth } from "@/hooks/useAuth";

export const CardProduct = ({ product }) => {
    const dispatch = useDispatch()
    const [countProduct, setCountProduct] = useState(1);

    const { isAuth } = useAuth()

    const { user: { token } } = useSelector(state => state)

    const handleClickAddToBasket = async () => {
        if(!isAuth){
            return console.log('Need login')
        }

        await addToBasket(token, product.id, countProduct)
        dispatch(addProductToBasket({...product, count}))
    };

    const handleClickPlus = () => {
        if (countProduct < 100) {
            setCountProduct(countProduct + 1)
        }
    }

    const handleClickMinus = () => {
        if (countProduct > 0) {
            setCountProduct(countProduct - 1)
        }
    }

    return (
        <div className={styles.cardProduct}>
            <h1 className={styles.titleProduct}>{product.name}</h1>
            <img src={product.photo} alt="" />
            <h1>{strLimit(product.composition, 50)}</h1>
            <div className={styles.cardFooter}>
                <div className={styles.count}>
                    <MinusSvg className={styles.minus} onClick={handleClickMinus} />
                    <span className="value">{countProduct}</span>
                    <PlusSvg className={styles.plus} onClick={handleClickPlus} />
                </div>
                <span className={styles.price}>{(product.price * countProduct).toFixed(1)} $</span>
            </div>
            <button onClick={handleClickAddToBasket} className={styles.linkChooseProduct}>Choose</button>
        </div>
    )
}
