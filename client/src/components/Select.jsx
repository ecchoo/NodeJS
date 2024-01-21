import { useEffect, useRef, useState } from 'react'
import iconSelectControl from '../assets/icon-select-control.svg'

import React from 'react'


const Select = ( { valueSelectControl, itemsSelectDrop } ) => {
    const [isShowSelectDrop, setIsShowSelectDrop] = useState(false)
    const [selectedValue, setSelectedValue] = useState(valueSelectControl)
    const selectDropRef = useRef(null)
    
    useEffect(() => {
        document.addEventListener('click', handleClickDocument)
        return ()=> {
            document.removeEventListener('clcik', handleClickDocument)
        }
    }, [])


    const handleClickDocument = ( e ) =>  {    
        if(!selectDropRef.current.contains(e.target)){
            setIsShowSelectDrop(false)
        }
    }

    const handleClickItemSelectDrop = ( e ) => {
        setIsShowSelectDrop(false)
        setSelectedValue(e.target.innerText)
        // e.target.classList.add('selected-item-drop');
    }

    return (
        <div className="select" ref={selectDropRef} id={valueSelectControl}>
            <div className="select-control" onClick={ () => setIsShowSelectDrop(true) }>
                <span className="value-control">{selectedValue}</span>
                <img src={iconSelectControl} alt="" className="icon-control" />
            </div>
            <div className={ isShowSelectDrop? 'select-drop show-drop' : 'select-drop' } >
                <div className="items-select-drop">
                    <span onClick={ handleClickItemSelectDrop } className='item-select-drop' >{valueSelectControl}</span>
                    { itemsSelectDrop.map(itemSelectDrop => 
                        <span  
                            onClick={ handleClickItemSelectDrop }  
                            className={ selectedValue==itemSelectDrop? 'item-select-drop selected-item': 'item-select-drop'} 
                            key={itemSelectDrop}>
                            {itemSelectDrop}
                        </span>
                    ) }
                </div>
            </div>
        </div>
    )
}

export default Select