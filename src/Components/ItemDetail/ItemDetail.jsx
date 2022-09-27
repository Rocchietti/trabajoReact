import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { cardContext } from '../../Context/CardContext'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/card.css'
import { Link } from 'react-router-dom'
import './detail.css'

const ItemDetail = ( {producto} ) => {
  const [cant, setCant] = useState(0)
  
  const {addItem, quantProdu} = useContext(cardContext)

 const onAdd = (count) =>{
    setCant(count)
    addItem(producto, count)
  }

  const cantidad = quantProdu(producto.id);
  return (
    <div className='detailCard'> 
      <div className='Card'>
        <div className='detalles'>
          <h3 className='item'>{producto.description}</h3>
          <p className='item'>{producto.img}</p>
          <h2 className='item'>${producto.price}</h2>
          {
            cant === 0 ? <ItemCount stock={producto.stock} initial={cantidad} onAdd={onAdd}/> :  <Link to='/cart' className='button'>Ver detalle</Link>
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail