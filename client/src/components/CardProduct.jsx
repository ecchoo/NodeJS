import { Link } from "react-router-dom"
import PlusSvg from "./ComponentsSvg/PlusSvg"
import MinusSvg from "./ComponentsSvg/MinusSvg"
import { useState } from "react"
import ProductCounter from "./ProductCounter"

//скорее всего будет просто объект pizza
const CardProduct = ( { titleProduct, photoProduct, compositionProduct, priceProduct } ) => {
    const [countProduct, setCountProduct] = useState(1);
    return(
        <div className="card-product">
            <h1 className="title-product">{titleProduct}</h1>
            <img src={photoProduct} alt="" className="photo-product" />
            <h1 className="composition-product">{compositionProduct}</h1>
            <div className="count-price">
                <ProductCounter value={countProduct} 
                    onClickMinus={ ()=> countProduct > 1 && setCountProduct(countProduct-1) } 
                    onClickPlus={ ()=> setCountProduct(countProduct+1) }
                />
                <span className="price">{(priceProduct*countProduct).toFixed(1)} $</span>
            </div>
            <Link className="link-choose-product" to='/'>Choose</Link>
        </div>
    )
}


//https://dodopizza.by/vitebsk/chkalova35?utm_source=google&utm_medium=cpc&utm_campaign=do_branddodo_search_allcategories_vitebsk_allvisitors&utm_term=dodo+pizza&gclid=CjwKCAjwge2iBhBBEiwAfXDBR_InsfQAU6IAFB4sEvOnwOpsEknIeOM89KxjDZHLRNwlJhz_d_SeqxoCp5oQAvD_BwE
//https://dodopizza.by/vitebsk/chkalova35/pizza/carbonara?utm_source=google&utm_medium=cpc&utm_campaign=do_branddodo_search_allcategories_vitebsk_allvisitors&utm_term=dodo+pizza&gclid=CjwKCAjwge2iBhBBEiwAfXDBR_InsfQAU6IAFB4sEvOnwOpsEknIeOM89KxjDZHLRNwlJhz_d_SeqxoCp5oQAvD_BwE

export default CardProduct