import { Link } from "react-router-dom"
import { HOME } from "@/constants/routes"
import styles from './styles.module.css'

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to={HOME}>Pizzazz Pizza</Link>
        </div>
    )
}