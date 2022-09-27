import React from 'react'
import './card.css'
import { Link } from 'react-router-dom';

const Item = ( {item} ) => {
  return (
    <div className='detailCard'>
      <div className='productInfo'>
        <h2 className='item'>{item.category}</h2>
          <h1 className='item'>{item.title} </h1>
          <p className='item'>{item.description}</p>
          <hr />
          </div>
          <p className='item'>{item.img}</p>
            <h2 className='item'>${item.price}</h2>
          <Link to={`/item/${item.id}`}> <button>Ver detalle</button> </Link> 
    </div>
  )
}

export default Item 