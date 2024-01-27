import { Link } from "react-router-dom"
// import CardProduct from "@/components/CardProduct"
import Carbonara from '/carbonara.png'
import { MENU } from "@/constants/routes"
import styles from './styles.module.css'
import { CardProduct } from "@/components/CardProduct"

export const Menu = () => {
    return(
        <>
            <section>
                <div className={styles.container}>
                    <ul className={styles.listTypesFood}>
                        <li><Link to={MENU}>Pizza</Link></li>
                        <li><Link to={MENU}>Drinks</Link></li>
                        <li><Link to={MENU}>Sauces</Link></li>
                        <li><Link to={MENU}>Desserts</Link></li>
                    </ul>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <div className={styles.products}>
                        <CardProduct titleProduct='Carbonara' photoProduct={Carbonara} 
                            compositionProduct='Champignons, onions, crème fraîche, bacon, mozzarella cheese, ham' 
                            priceProduct={12.5} 
                        />
                        <CardProduct titleProduct='Carbonara' photoProduct={Carbonara} 
                            compositionProduct='Champignons, onions, crème fraîche, bacon, mozzarella cheese, ham' 
                            priceProduct={12.5} 
                        />
                        <CardProduct titleProduct='Carbonara' photoProduct={Carbonara} 
                            compositionProduct='Champignons, onions, crème fraîche, bacon, mozzarella cheese, ham' 
                            priceProduct={12.5} 
                        />
                        <CardProduct titleProduct='Carbonara' photoProduct={Carbonara} 
                            compositionProduct='Champignons, onions, crème fraîche, bacon, mozzarella cheese, ham' 
                            priceProduct={12.5} 
                        />
                        <CardProduct titleProduct='Carbonara' photoProduct={Carbonara} 
                            compositionProduct='Champignons, onions, crème fraîche, bacon, mozzarella cheese, ham' 
                            priceProduct={12.5} 
                        />
                        <CardProduct titleProduct='Carbonara' photoProduct={Carbonara} 
                            compositionProduct='Champignons, onions, crème fraîche, bacon, mozzarella cheese, ham' 
                            priceProduct={12.5} 
                        />
                        <CardProduct titleProduct='Carbonara' photoProduct={Carbonara} 
                            compositionProduct='Champignons, onions, crème fraîche, bacon, mozzarella cheese, ham' 
                            priceProduct={12.5} 
                        />
                        <CardProduct titleProduct='Carbonara' photoProduct={Carbonara} 
                            compositionProduct='Champignons, onions, crème fraîche, bacon, mozzarella cheese, ham' 
                            priceProduct={12.5} 
                        />
                        <CardProduct titleProduct='Carbonara' photoProduct={Carbonara} 
                            compositionProduct='Champignons, onions, crème fraîche, bacon, mozzarella cheese, ham' 
                            priceProduct={12.5} 
                        />
                        <CardProduct titleProduct='Carbonara' photoProduct={Carbonara} 
                            compositionProduct='Champignons, onions, crème fraîche, bacon, mozzarella cheese, ham' 
                            priceProduct={12.5} 
                        />
                    </div>
                </div>
            </section>
        </>
    )
}