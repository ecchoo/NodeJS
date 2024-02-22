import { Link, useParams } from "react-router-dom"
import { MENU } from "@/constants/routes"
import styles from './styles.module.css'
import { CardProduct } from "@/components/CardProduct"
import { useFetchProductsQuery } from "@/api"

export const Menu = ({ params }) => {
    const { category } = useParams()
    console.log(category)
    const { data: products, isLoading } = useFetchProductsQuery({ category: category })

    if (!isLoading) {
        console.log(products)
    }

    return (
        <>
            <section>
                <div className={styles.container}>
                    <ul className={styles.listTypesFood}>
                        <li><Link to={MENU.replace(':category', 'all')}>All</Link></li>
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