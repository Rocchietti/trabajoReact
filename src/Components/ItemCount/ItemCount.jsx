import React, {useState} from 'react'

const ItemCount = (props) => {
    
    const {stock, initial} = props;
    const [count, setCount] = useState(1) 

    const sumar = () => {
        count <= {stock} ? setCount(count + 1) : alert('Maximo de producto')
    }
    const restar = () => {
        count <= {initial} ? setCount(count - 1) : alert ('Minimo del producto')
    }

  return (
    <div>
        <button onClick={sumar}>+</button>
        <p>ItemCount: {initial}</p>
        <button disabled={count === 0}>Agregar al carrito</button>
        <button onClick={restar}>-</button>
    </div>
  )
}

export default ItemCount