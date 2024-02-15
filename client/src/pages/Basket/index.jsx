import { CardProductBasket } from '@/components/CardProductBasket'
import { useFetchBasketQuery } from "@/api"
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '@/store/reducers'
import { useEffect } from 'react'

export const Basket = () => {
    const dispatch = useDispatch()
    const { data: products, isLoading } = useFetchBasketQuery({ userId: 2 })
    const { productsBasket } = useSelector(state => state.basket)
    const totalPriceBasket = !isLoading && productsBasket.reduce((totalPrice, productBasket) => {
        return totalPrice + productBasket.price * productBasket.count
    }, 0)

    useEffect(() => {
        if (!isLoading) {
            dispatch(setProducts(products));
        }
    }, [dispatch, isLoading, products]);

    console.log(productsBasket)

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.basket}>
                    <h1 className={styles.headerBasket}>Basket</h1>
                    <div className={styles.productsBasket}>
                        {!isLoading && productsBasket.map(productBasket =>
                            <CardProductBasket
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
