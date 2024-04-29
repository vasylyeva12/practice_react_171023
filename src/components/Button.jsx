// {// Подготовьте компонент Button, который будет хранить один тег - button
// В теге укажите текстовое сво-во 'Click!'
// Вызовите компонент внутри App}

import React from 'react'

const Button = (props) => {

  const{title, color, size}= props 

  return (
    <button className= {`btn_elem ${color} ${size}`} >{title}</button>
  )
}

export default Button