import { useState } from "react"
import ProductCounter from "./ProductCounter"
import DeleteSvg from "./ComponentsSvg/DeleteSvg"

const CardProductBasket = ({productBasket, onClickMinus, onClickPlus, onClickDelete}) => {
    // const [countProduct, setCountProduct] = useState(productBasket.count)
    return(
        <>
            <div className="product-basket">
                <div className="photo">
                    <img src={productBasket.photo} alt="" />
                </div>
                <span className="title">{productBasket.title}</span>
                <div className="price">
                    {(productBasket.price*productBasket.count).toFixed(1)} $
                </div>
                <ProductCounter value={productBasket.count}
                    onClickMinus={ onClickMinus }
                    onClickPlus={ onClickPlus }
                />
                <button className="btn-delete" onClick={ () => onClickDelete()}>
                    <DeleteSvg className = 'svg-delete' />
                </button>
            </div>
        </>
    )
}

export default CardProductBasket