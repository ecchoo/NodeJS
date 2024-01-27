import MinusSvg from '@/components/svg/MinusSvg'
import PlusSvg from "@/components/svg/PlusSvg"
import styles from  './styles.module.css'

export const ProductCounter = ({value, onClickMinus, onClickPlus}) => {
    return (
        <div className={styles.count}>
            <MinusSvg className={styles.minus} onClick={onClickMinus} />
            <span className="value">{value}</span>
            <PlusSvg className={styles.plus} onClick={onClickPlus} />
        </div>
    )
}