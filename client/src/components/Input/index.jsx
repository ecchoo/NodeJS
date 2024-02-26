import styles from './styles.module.css'

export const Input = ({ type, name, placeholder, value, onChange, errorValidation }) => {
    return (
        <div>
            <div className={styles.inputBox}>
                <input
                    value={value}
                    onChange={onChange}
                    type={type}
                    name={name}
                    id={name}
                    className={styles.input}
                    placeholder=" "
                />
                <label
                    htmlFor={name}
                    className={styles.flyingPlaceholder}
                >
                    {placeholder}
                </label>
            </div>
            <span
                className={styles.errorValidation}
            >
                {errorValidation}
            </span>
        </div>
    )
}