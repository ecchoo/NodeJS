import { Link, useParams } from "react-router-dom"
import { MENU } from "@/constants/routes"
import styles from './styles.module.css'
import { CardProduct } from "@/components/CardProduct"
import { useFetchProductsQuery } from "@/api"

export const Menu = () => {
    console.log('menu')
    const { category } = useParams()
    const { data: products, isLoading } = useFetchProductsQuery({ category: category })
    console.log('after query')
    if (!isLoading) {
        console.log(products)
    }

    console.log('After if')

    return (
        <>
            <section>
                <div className={styles.container}>
                    <ul className={styles.listTypesFood}>
                        <li><Link to={MENU.replace(':category', 'pizza')}>Pizza</Link></li>
                        <li><Link to={MENU.replace(':category', 'drinks')}>Drinks</Link></li>
                        <li><Link to={MENU.replace(':category', 'sauces')}>Sauces</Link></li>
                        <li><Link to={MENU.replace(':category', 'desserts')}>Desserts</Link></li>
                    </ul>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <div className={styles.products}>
                        {!isLoading && products.map(product =>
                            <CardProduct
                                key={product.id}
                                product={product}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}