import React, { useEffect } from 'react';
import { CardBasket } from '@/components/CardBasket'
import { getBasket } from "@/api"
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsBasket } from '@/store/reducers'

export const Basket = () => {
    const dispatch = useDispatch()

    const { 
        basket: { productsBasket }, 
        user: { token }
    } = useSelector(state => state)

    const totalPriceBasket = productsBasket && productsBasket.reduce((totalPrice, productBasket) => {
        return totalPrice + productBasket.price * productBasket.count
    }, 0)

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
                        {productsBasket && productsBasket.map(productBasket =>
                            <CardBasket
                                key={productBasket.id}
                                productBasket={productBasket}
                            />
                        )}
                    </div>
                    <div className={styles.totalPriceBasket}>
                        <span>Total price</span>
                        <span className="total-price">
                            {totalPriceBasket} $
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
