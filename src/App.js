import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <>
      <Button title='Add to cart' color='red' size='xl'/>
      <Button title='Click' color='blue'size='l'/>
      <Button title='Add cart' color='yellow' size='s'/>
    </>
  )
}

export default App;


// Task 2
// реализуйте проп title, который будет передавать значение тектового св-ва компонента Button
// Вызовите компонент  Button еще раз внутри  App с разным тектовым св-ом

// Task 3
// Для кнопок предусмотреть статичный класс, который оформит кнопку на мое усмотрение
// предусмотреть второй класс, который будет передавать значение цвета фона кнопки

// Task 4
// реализуйте еще один пропс, который будет передавать следующие значения для классов
// xl - padding 25px, fs 20px
//  l, padding 15px, fs 15px
// s  padding 10px, fs 10px