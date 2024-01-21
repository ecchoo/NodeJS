const FormAddress = ( { textButton } ) => {
    return(
        <form className="form-address" onSubmit={(e) => e.preventDefault()}>
            <h1 className="header-form-address">Address</h1>
            <div className="inputs">
                <div className="input-box">
                    <input type="text" name="city" id="city" className="input" placeholder=" "/>
                    <label htmlFor="city" className="flying-placeholder">City</label>
                </div>
                <div className="input-box">
                    <input type="text" name="street" id="street" className="input" placeholder=" "/>
                    <label htmlFor="street" className="flying-placeholder">Street</label>
                </div>
                <div className="input-box">
                    <input type="text" name="house" id="house" className="input" placeholder=" "/>
                    <label htmlFor="house" className="flying-placeholder">Number house</label>
                </div>
                <div className="row-inputs">
                    <div className="input-box">
                        <input type="text" name="building" id="building" className="input" placeholder=" "/>
                        <label htmlFor="building" className="flying-placeholder">Building</label>
                    </div>
                    <div className="input-box">
                        <input type="text" name="structure" id="structure" className="input" placeholder=" "/>
                        <label htmlFor="structure" className="flying-placeholder">Structure</label>
                    </div>
                    <div className="input-box">
                        <input type="text" name="fraction" id="fraction" className="input" placeholder=" "/>
                        <label htmlFor="fraction" className="flying-placeholder">Fraction</label>
                    </div>
                </div>
                <div className="input-box">
                    <input type="text" name="apartment" id="apartment" className="input" placeholder=" "/>
                    <label htmlFor="apartment" className="flying-placeholder">Number apartament</label>
                </div>
            </div>
            <button className="btn-submit-address" type="submit">{textButton}</button>
        </form>
    )
}

export default FormAddress

{/* <div className="input-box">
    <input type="text" className="input-form-adding-bank-card" id='number-bank-card'  placeholder=' ' />
    <label htmlFor="number-bank-card" className="flying-placeholder">Number bank card</label>
</div> */}