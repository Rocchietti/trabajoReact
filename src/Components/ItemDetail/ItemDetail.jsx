import React from 'react'

const ItemDetail = ({producto}) => {
  console.log(producto)
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