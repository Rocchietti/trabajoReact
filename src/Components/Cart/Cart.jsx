import React from 'react'
import { useContext } from 'react'
import { cardContext } from '../../Context/CardContext'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import { useState } from 'react'

const Cart = () => {
    const [compraId, setCompraId] = useState('')

    const handleId = (id) => {
        setCompraId(id)
    }
    compraId ? <h1>Gracias por tu compra, el ID es: {compraId}</h1> : <h1>Ningún producto seleccionado, vuelve a <Link to='/'><button>Home</button></Link> para realizar algún pedido.</h1>; 
    const {cart, clearCart, deleteProd, totalPrice } = useContext(cardContext)
    if (cart.length === 0){
        return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '350px', fontFamily: 'Roboto' }}>
        <Link to='/'><button>Agregar compra</button></Link>
        <h1>El carrito se encuentra vacio.</h1> 
        </div>
    } 
  return (
    <div>
        {
            cart.map((item)=>(
            <div key={item.id} className='detailCard' style={{fontFamily: 'Roboto'}}>
                <h1>{item.title}</h1>
                <p>{item.img}</p>
                <h3>Cantidad: {item.counting}</h3>
                <h4>${item.price}</h4>
                <button onClick={ ()=>deleteProd(item.id) }>Eliminar producto</button>
                <Link to='/'><button>Seguir comprando</button></Link>
            </div>

            ))
        }
        <button onClick={clearCart}>Limpiar carrito</button>
        <button>Valor total: ${totalPrice()}</button>
        <Form cart={cart} total={totalPrice()} clearCart={clearCart()} handleId={handleId()}/>
    </div>
  )
}

export default Cart