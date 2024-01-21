import styles from './styles.module.css'

export const BlockWhyWe = ( { title, subtitle } ) => {
    return(
        <div className={styles.blockWhyWe}>
            <span className={styles.title}>{title}</span>
            <span>{subtitle}</span>
        </div>
    )
}
