import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import mainScreenPhoto from '/mainScreenPhoto.png';
import { BlockWhyWe } from "@/components/BlockWhyWe";
import { ListAbout } from "@/components/ListAbout";
import { aboutItems } from "@/constants/aboutItems";
import 'aos/dist/aos.css';
import styles from './styles.module.css';

export const Home = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <section>
                <div className={styles.container}>
                    <div className={styles.mainScreenRow}>
                        <div className={styles.content}>
                            <h1 className={styles.offer}>Your favorite pizza in a few clicks</h1>
                            <h2 className={styles.descriptor}>Order a delicious pizza online from Pizzazz Pizza right now!</h2>
                            <Link className={styles.linkOrder} to='/'>Order</Link>
                        </div>
                        <div>
                            <img src={mainScreenPhoto} alt="mainScreenPhoto" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.container}>
                    <h1 className={styles.headerAbout}>If you are looking for the best fast food in Belarus, then you have found it</h1>
                    <div className={styles.whyWe}>
                        <BlockWhyWe title='+ 1000' subtitle='clients' />
                        <BlockWhyWe title='100 %' subtitle='natural ingredients' />
                        <BlockWhyWe title='+ 10' subtitle='years of experience' />
                        <BlockWhyWe title='up to 30m' subtitle='delivery' />
                    </div>
                    <ListAbout aboutItems={aboutItems} />
                </div>
            </section>
        </>
    )
}