import React, { useEffect } from 'react';
import { CardBasket } from '@/components/CardBasket'
import { useFetchBasketQuery } from "@/api"
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsBasket } from '@/store/reducers'

export const Basket = () => {
    const dispatch = useDispatch()

    const { data: products, isLoading } = useFetchBasketQuery()
    const { basket: { productsBasket } } = useSelector(state => state)

    const totalPriceBasket = !isLoading && productsBasket && productsBasket.reduce((totalPrice, productBasket) => {
        return totalPrice + productBasket.price * productBasket.count
    }, 0)

    useEffect(() => {
        if (!isLoading) {
            dispatch(setProductsBasket(products));
        }
    }, []);

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.basket}>
                    <h1 className={styles.headerBasket}>Basket</h1>
                    <div className={styles.productsBasket}>
                        {!isLoading && productsBasket && productsBasket.map(productBasket =>
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
