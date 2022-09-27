import React, {useState} from 'react'
import { useEffect } from 'react'
import './ItemCount.css'
const ItemCount = ({stock, onAdd, initial = 1}) => {

    const [count, setCount] = useState(1) 

    useEffect(() => {
      setCount(initial)
    }, [initial])

    const sumar = () => {
        if( count < (stock) ) {
          setCount(count + 1);
        }else {
          alert ('Maximo del producto');
      }
    }

    const restar = () => {
        if (count > (initial) ) {
          setCount(count - 1);
        }else {
          alert('Minimo del producto');
        }
    }

  return (
    <div className='itemcount'>
        <button className='btn' onClick={sumar}>+</button>
        <p className='contador'>ItemCount: {count}</p>
        <button className='btn' disabled={count === 0} onClick={()=>onAdd(count)}>Agregar al carrito</button>
        <button className='btn' onClick={restar}>-</button>
    </div>
  )
}

export default ItemCount