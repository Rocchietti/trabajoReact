import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './main.css';
const Main = () => {

  const onAdd = () => {
    alert ("Saludar")
  }

  return (
    <div>
      <ItemCount stock={20} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default Main