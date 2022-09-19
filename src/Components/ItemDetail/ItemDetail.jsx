import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/card.css'
import './detail.css'

const ItemDetail = ( {producto} ) => {
  const [cant, setCant] = useState(0)
  const onAdd = (count) =>{
    setCant(count)
  }

  return (
    <div className='detailCard'> 
      <div className='Card'>
        <div className='detalles'>
          <h3 className='item'>{producto.description}</h3>
          <p className='item'>{producto.img}</p>
          <h2 className='item'>{producto.price}</h2>
          {
            cant === 0 ? <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/> : <Link to='/category/cart'>Ver el carrito</Link>
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail