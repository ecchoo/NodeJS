const Input = ( { placaholder, ...props } ) => {
    return (
        <div className="input-box">
            <input type="text" className="input" {...props}  placeholder=' ' />
            <label htmlFor={props.id} className="flying-placeholder">{placaholder}</label>
        </div>
    )
}

export default Input