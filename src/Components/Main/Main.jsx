import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './main.css';
const Main = () => {
  return (
    <div>
      <ItemCount stock='20' initial='1' onAdd='' />
    </div>
  )
}

export default Main