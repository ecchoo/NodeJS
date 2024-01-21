import MinusSvg from "./ComponentsSvg/MinusSvg"
import PlusSvg from "./ComponentsSvg/PlusSvg"

const ProductCounter = ({value, onClickMinus, onClickPlus}) => {
    return (
        <div className="count">
            <MinusSvg className='minus' onClick={onClickMinus} />
            <span className="value">{value}</span>
            <PlusSvg className='plus' onClick={onClickPlus} />
        </div>
    )
}

export default ProductCounter