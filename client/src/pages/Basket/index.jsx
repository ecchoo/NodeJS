import React, { useEffect } from 'react';
import { CardBasket } from '@/components/CardBasket'
import { deleteProductBasket, getBasket, order } from "@/api"
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsBasket } from '@/store/reducers'

export const Basket = () => {
    const dispatch = useDispatch()

    const { 
        basket: { productsBasket }, 
        user: { token }
    } = useSelector(state => state)

    const totalPriceBasket = productsBasket.length && productsBasket.reduce((totalPrice, productBasket) => {
        return totalPrice + productBasket.price * productBasket.count
    }, 0) || 0

    const handleClickOrder = async () => {
        try{
            const result = await order(token)
            dispatch(setProductsBasket(result))
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        const fetchBasket = async () => {
            const productsBasket = await getBasket(token)
            dispatch(setProductsBasket(productsBasket))
        }
        
        fetchBasket()
    }, []);

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.basket}>
                    <h1 className={styles.headerBasket}>Basket</h1>
                    <div className={styles.productsBasket}>
                        {productsBasket.length ? productsBasket.map(productBasket =>
                            <CardBasket
                                key={productBasket.id}
                                productBasket={productBasket}
                            />
                        ): (
                            <span>Корзина пуста, перейдите в меню</span>
                        )}
                    </div>
                    <div className={styles.totalPriceBasket}>
                        <span>Total price</span>
                        <span className="total-price">
                            {totalPriceBasket} $
                        </span>
                    </div>
                    { productsBasket.length ? <button onClick={handleClickOrder} className={styles.order}>Order</button>: null}
                </div>
            </div>
        </section>
    )
}
