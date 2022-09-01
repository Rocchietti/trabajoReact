import React from 'react'

const Item = ( {item} ) => {
  return (
    <div>
        <h1>{item.title}</h1>
        <h3>{item.price}</h3>
        <p>{item.description}</p>
        <p>{item.img}</p>
        <h4>{item.category}</h4>
    </div>
  )
}

export default Item