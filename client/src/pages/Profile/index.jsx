import { FormAddress } from '@/components/FormAddress'
import styles from './styles.module.css'
import { FormPersonalData } from '@/components/FormPersonalData'
import { useNavigate } from 'react-router-dom'
import { HOME } from '@/constants/routes'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '@/store/reducers'
import { useState } from 'react'
import { PROFILE_SECTIONS } from '@/constants/profileSections'
import { useFetchProfileQuery } from '@/api'
import { CardDelivery } from '@/components/CardDelivery'

export const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { data: userData, isLoading } = useFetchProfileQuery()

    const [section, setSection] = useState(PROFILE_SECTIONS.EDIT)

    const handleClickLogout = async () => {
        dispatch(logoutUser())
        navigate(HOME)
    }

    const handleClickProfileSection = (section) => {
        setSection(section)
    }

    return (
        <>
            {
                !isLoading ? (
                    <div className={styles.container}>
                        <div className={styles.sectionsProfile}>
                            <h1
                                className={`${styles.headerSectionProfile} ${section == PROFILE_SECTIONS.EDIT ? styles.active : ''}`}
                                onClick={handleClickProfileSection.bind(null, PROFILE_SECTIONS.EDIT)}
                            >
                                Edit profile
                            </h1>
                            <h1
                                className={`${styles.headerSectionProfile} ${section == PROFILE_SECTIONS.DELIVERIES ? styles.active : ''}`}
                                onClick={handleClickProfileSection.bind(null, PROFILE_SECTIONS.DELIVERIES)}
                            >
                                Deliveries
                            </h1>
                        </div>
                        {
                            section == PROFILE_SECTIONS.EDIT ? (
                                <div className={styles.personalData}>
                                    <FormAddress initialAddress={userData?.address} />
                                    <FormPersonalData />
                                    <button onClick={handleClickLogout} className={styles.buttonLogout}>Logout</button>
                                </div>
                            ) : (
                                <div className={styles.deliveries}>
                                    {
                                        userData.deliveries.map(productDelivery =>
                                            <CardDelivery
                                                key={`${productDelivery.name}-${productDelivery.id}`}
                                                productDelivery={productDelivery}
                                            />
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <span>Loading...</span>
                )
            }
        </>
    )
}