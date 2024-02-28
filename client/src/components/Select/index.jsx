import { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import iconSelectControl from '@/assets/iconSelectControl.svg'
import styles from './styles.module.css'


export const Select = ({ label, options, onChange, defaultValue = '' }) => {
    console.log(defaultValue)
    const [isShowSelectDrop, setIsShowSelectDrop] = useState(false)
    const [selectedOption, setSelectedOption] = useState(defaultValue)

    const selectDropRef = useRef(null)

    const hideSelect = () => {
        setIsShowSelectDrop(false)
    }

    useEffect(() => {
        setSelectedOption({
            value: defaultValue,
            label: `${defaultValue.slice(0, 1).toUpperCase()}${defaultValue.slice(1)}`
        })
    }, [defaultValue])

    useOnClickOutside(selectDropRef, hideSelect)

    const handleChange = (option) => {
        setIsShowSelectDrop(false)
        setSelectedOption(option)
        onChange(option.value)
    }

    const handleClickSelectControl = () => {
        setIsShowSelectDrop(!isShowSelectDrop)
    }

    return (
        <div className={styles.select} ref={selectDropRef}>
            <div className={`${styles.selectControl}  ${isShowSelectDrop && styles.show}`} onClick={handleClickSelectControl}>
                <span className={styles.valueControl}>{selectedOption.label || label}</span>
                <img src={iconSelectControl} alt="Icon select" className={`${styles.iconControl} ${isShowSelectDrop && styles.rotate}`} />
            </div>
            <div className={isShowSelectDrop ? `${styles.selectDrop} ${styles.showDrop}` : styles.selectDrop}>
                <div className={styles.itemsSelectDrop}>
                    {options.map(option =>
                        <span
                            onClick={handleChange.bind(null, option)}
                            className={`${styles.itemSelectDrop} ${selectedOption.value === option.value && styles.selectedItem}`}
                            key={option.value}
                        >
                            {option.label}
                        </span>
                    )}
                </div>
            </div>
        </div>

    )
}