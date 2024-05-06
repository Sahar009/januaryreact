import React from 'react'
import './button.css'
const Button = ({text,href,btnClass,yo}) => {
  return (
  <a href={href} className={`btn ${btnClass}`}  >
   {text}
  </a>
  )
}

export default Button