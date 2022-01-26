import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')
    
    const handlerInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handlerSubmit = (e) => {
       
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories((cat) => [inputValue, ...cat])
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handlerSubmit}>
            <p>{inputValue}</p>
            <input 
                type="text" 
                value={inputValue}
                onChange={handlerInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}