import React, {useState} from 'react'
import './ItemCount.css'
const ItemCount = (props) => {

  const onAdd = () =>{
    alert('Se ha agregado al carrito.')
  }


    const [count, setCount] = useState(1) 

    const sumar = () => {
        if( count < (props.stock) ) {
          setCount(count + 1);
        }else {
          alert ('Maximo del producto');
      }
    }

    const restar = () => {
        if (count > (props.initial) ) {
          setCount(count - 1);
        }else {
          alert('Minimo del producto');
        }
    }


  return (
    <div className='itemcount'>
        <button className='btn' onClick={sumar}>+</button>
        <p className='contador'>ItemCount: {count}</p>
        <button className='btn' disabled={count === 0} onClick={onAdd}>Agregar al carrito</button>
        <button className='btn' onClick={restar}>-</button>
    </div>
  )
}

export default ItemCount