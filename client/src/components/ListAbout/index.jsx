import styles from './styles.module.css'

const CardAbout = ({ text, photo, dataAos }) => {

    return (
        <div data-aos={dataAos} className={styles.cardAbout}>
            <img className={styles.photo} src={photo} alt="" />
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export const ListAbout = ({ aboutItems }) => {
    return (
        <div className={styles.cardsAbout}>
            {aboutItems.map(aboutItem =>
                <CardAbout
                    key={aboutItem.id}
                    text={aboutItem.text}
                    photo={aboutItem.photo}
                    dataAos={aboutItem.dataAos}
                />
            )}
        </div>
    )
}