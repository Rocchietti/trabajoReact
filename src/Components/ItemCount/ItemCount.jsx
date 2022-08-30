import React, {useState} from 'react'

const ItemCount = (props) => {
  const {onAdd} = props;
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
    <div>
        <button onClick={sumar}>+</button>
        <p>ItemCount: {count}</p>
        <button disabled={count === 0} onClick={onAdd}>Agregar al carrito</button>
        <button onClick={restar}>-</button>
    </div>
  )
}

export default ItemCount