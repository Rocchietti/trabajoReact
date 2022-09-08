import React from 'react'
import './card.css'

const Item = ( {item} ) => {
  return (
    <div className='detailCard'>
        <h1 className='item'>{item.title} </h1>
        <h2 className='item'>{item.price}</h2>
        <p className='item'>{item.description}</p>
        <p className='item'>{item.img}</p>
        <h2 className='item'>{item.category}</h2> 
    </div>
  )
}

export default Item 