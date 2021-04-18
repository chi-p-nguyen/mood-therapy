import React from 'react'
import './Button.css'
function Button({text, color, onClick}) {
    return (
        <>
        <button className={color} onClick={onClick}>{text}</button>
        </>
    )
}

export default Button
