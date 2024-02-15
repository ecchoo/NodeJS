import { useState } from "react"
import { ProductCounter } from "@/components/ProductCounter"
import DeleteSvg from "@/components/svg/DeleteSvg"
import styles from './styles.module.css'
import { useDispatch } from "react-redux"
import MinusSvg from "../svg/MinusSvg";
import PlusSvg from "../svg/PlusSvg";
import { changeCountProduct, deleteProduct } from "@/store/reducers"
import { deleteProductBasket, updateCount } from "@/api"

export const CardProductBasket = ({ productBasket }) => {
    const dispatch = useDispatch()

    const handleClickMinus = async () => {
        if(productBasket.count == 1){
            return
        }

        await updateCount(productBasket.id, -1)
        dispatch(changeCountProduct({ productId: productBasket.id, valueCount: -1 }))
    }

    const handleClickPlus = async () => {
        if(productBasket.count == 99){
            return
        }
        
        await updateCount(productBasket.id, 1)
        dispatch(changeCountProduct({ productId: productBasket.id, valueCount: 1 }))
    }

    const handleClickDelete = async () => {
        await deleteProductBasket(productBasket.id)
        dispatch(deleteProduct(productBasket.id))
    }

    return (
        <>
            <div className={styles.productBasket}>
                <div className={styles.photo}>
                    <img src={productBasket.photo} alt="" />
                </div>
                <span className={styles.title}>{productBasket.title}</span>
                <div className={styles.price}>
                    {(productBasket.price * productBasket.count).toFixed(1)} $
                </div>
                <div className={styles.count}>
                    <MinusSvg className={styles.minus} onClick={handleClickMinus} />
                    <span className="value">{productBasket.count}</span>
                    <PlusSvg className={styles.plus} onClick={handleClickPlus} />
                </div>
                <button onClick={handleClickDelete} className={styles.btnDelete}>
                    <DeleteSvg className={styles.svgDelete} />
                </button>
            </div>
        </>
    )
}