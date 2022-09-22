import React from 'react'
import { useContext } from 'react'
import { cardContext } from '../../Context/CardContext'

const Cart = () => {
    const {cart, clearCart, deleteProd} = useContext(cardContext)
    console.log(cart)
    if (cart.length === 0){
        return <h1>El carrito se encuentra vacio.</h1>
    } 
  return (
    <div>
        {
            cart.map((item)=>(
            <div key={item.id} className='detailCard'>
                <h1>{item.title}</h1>
                <p>{item.img}</p>
                <h3>Cantidad: {item.cantidad}</h3>
                <h4>{item.price}.</h4>
                <button onClick={ ()=>deleteProd(item.id) }>Eliminar producto</button>
    
            </div>

            ))
        }
        <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}

export default Cart