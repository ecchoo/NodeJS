import { useDispatch } from "react-redux"
import styles from './styles.module.css'
import { convertDate } from "@/utils/convertDate"

export const CardDelivery = ({productDelivery}) => {
    return (
        <div className={styles.productDelivery}>
            <div className={styles.photo}>
                <img src={productDelivery.photo} alt="" />
            </div>
            <span className={styles.title}>{productDelivery.name}</span>
            <span >{convertDate(productDelivery.deliveryDate)}</span>
            <div className={styles.price}>
                {(productDelivery.price * productDelivery.count).toFixed(1)} $
            </div>
        </div>
    )
}