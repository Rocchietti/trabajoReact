import React from 'react'
import '../ItemListContainer/card.css'

const ItemDetail = ({producto}) => {
  return (
    <div className='detailCard'> 
          <h1>{producto.title}</h1>
          <h3>{producto.description}</h3>
          <h3>{producto.img}</h3>
          <h3>{producto.price}</h3>
    </div>
  )
}

export default ItemDetail