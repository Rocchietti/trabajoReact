import React from 'react'
import '../ItemListContainer/card.css'
import './detail.css'

const ItemDetail = ( {producto} ) => {
  return (
    <div className='detailCard'> 
      <div className='Card'>
        <div className='detalles'>
          <h3 className='item'>{producto.description}</h3>
          <p className='item'>{producto.img}</p>
          <h2 className='item'>{producto.price}</h2>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail