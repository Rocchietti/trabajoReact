import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cardContext } from '../../Context/CardContext'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/card.css'
import './detail.css'

const ItemDetail = ( {producto} ) => {
  const [cant, setCant] = useState(0)
  
  const {cart, addItem, clearCart, deleteProd} = useContext(cardContext)

  const onAdd = (count) =>{
    setCant(count)
    addItem(producto, count)
  }
  console.log(cart)
  return (
    <div className='detailCard'> 
      <div className='Card'>
        <div className='detalles'>
          <h3 className='item'>{producto.description}</h3>
          <p className='item'>{producto.img}</p>
          <h2 className='item'>{producto.price}</h2>
          {
            cant === 0 ? <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/> : <div> <Link to='/category/cart'>Ver el carrito</Link> <button onClick={clearCart}>Limpiar carrito</button> 
            <button onClick={() => deleteProd(producto.id)}>Eliminar producto</button></div>
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail