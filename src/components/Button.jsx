import React from 'react'
import Home from './Home'

const Button = ({styles}) => {
  return (
    <button type = "button" onClick={Home} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-none bg-blue-gradient outline-none ${styles}`}>Get Started</button>
  )
}

export default Button