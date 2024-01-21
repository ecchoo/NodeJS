// import CardProductBasket from "../components/CardProductBasket";
// import Carbonara from '../assets/carbonara.png'
// import '../css/basketPage.css'
// import { useState } from "react";
// import FormAddingBankCard from "../components/FormAddingBankCard";
// import FormAddress from "../components/FormAddress";


// const productsBasket = [
//     {id: 1, title: 'Carbonara', photo: Carbonara, price: 12.5, count: 3},
//     {id: 2, title: 'Carbonara', photo: Carbonara, price: 42.5, count: 1},
//     {id: 3, title: 'Carbonara', photo: Carbonara, price: 2.5, count: 5},
//     {id: 4, title: 'Carbonara', photo: Carbonara, price: 22.5, count: 1},
// ]


// const Basket = () => {
//     const [products, setProducts] = useState(productsBasket)
//     function handleClickDelete(selectProductId){
//         setProducts(
//             products.filter(product => product.id!==selectProductId)
//         )
//     }
//     function handleClickPlus(selectProductId){
//         setProducts(
//             products.map(product => {
//                 if(product.id!=selectProductId || product.count==99) return product
//                 return { ...product, count: product.count+1 }
//             })
//         )
//     }
//     function handleClickMinus(selectProductId){
//         setProducts(
//             products.map(product => {
//                 if(product.id!=selectProductId || product.count==1) return product
//                 return { ...product, count: product.count-1 }
//             })
//         )
//     }

//     return (
//         <section className="main-section">
//             <div className="container">
//                 <div className="basket">
//                     <h1 className="header-basket">Basket</h1>
//                     <div className="products-basket">
//                         { products.map(productBasket => 
//                             <CardProductBasket key={productBasket.id}
//                                 productBasket={productBasket}
//                                 onClickDelete={() => handleClickDelete(productBasket.id)}
//                                 onClickMinus={() => handleClickMinus(productBasket.id)}
//                                 onClickPlus={() => handleClickPlus(productBasket.id)}
//                             />    
//                         )}
//                     </div>
//                     <div className="total-price-basket">
//                         <span>Total price</span>
//                         <span className="total-price">
//                             { products.reduce((totalPrice, productBasket) =>
//                                 totalPrice + productBasket.price * productBasket.count
//                             , 0)} $
//                         </span>
//                     </div>
//                 </div>
//                 <div className="payment">
//                     <h1 className="header-payment">Payment</h1>
//                     <div className="forms">
//                         {/* <FormAddingBankCard />  */}
//                         <FormAddress textButton='Order' />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Basket