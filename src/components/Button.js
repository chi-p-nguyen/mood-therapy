import React from 'react'
import './Button.css'
import { Link } from 'react-scroll'
function Button({ text, color, onClick, dest }) {
  return (
    <>
      <Link to={dest} smooth={true} duration={1300}>
        <button className={color} onClick={onClick}>
          {text}
        </button>
      </Link>
    </>
  )
}

export default Button
