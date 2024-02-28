import DeleteSvg from "@/components/svg/DeleteSvg"
import styles from './styles.module.css'
import { useDispatch, useSelector } from "react-redux"
import MinusSvg from "../svg/MinusSvg";
import PlusSvg from "../svg/PlusSvg";
import { changeCountProduct, deleteProduct } from "@/store/reducers"
import { deleteProductBasket, updateCount } from "@/api"
import { toast } from "react-toastify";

export const CardBasket = ({ productBasket }) => {
    const dispatch = useDispatch()

    const { user: { token } } = useSelector(state => state)

    const handleClickMinus = async () => {
        if (productBasket.count == 1) {
            return
        }
        
        try {
            await updateCount(token, productBasket.id, -1)
            dispatch(changeCountProduct({ productId: productBasket.id, valueCount: -1 }))
        } catch (err) {
            toast('При уменьшении количества произошла ошибка')
            console.log(err)
        }
    }

    const handleClickPlus = async () => {
        if (productBasket.count == 99) {
            return
        }

        try {
            await updateCount(token, productBasket.id, 1)
            dispatch(changeCountProduct({ productId: productBasket.id, valueCount: 1 }))
        } catch (err) {
            toast('При увеличении количества произошла ошибка')
            console.log(err)
        }
    }

    const handleClickDelete = async () => {
        await deleteProductBasket(token, productBasket.id)
        dispatch(deleteProduct(productBasket.id))
    }

    return (
        <div className={styles.productBasket}>
            <div className={styles.photo}>
                <img src={productBasket.photo} alt="" />
            </div>
            <span className={styles.title}>{productBasket.name}</span>
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
    )
}