import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './main.css';
const Main = () => {
  

  const onAdd = () => {
    alert ("Agregado al carrito. Pulsa Aceptar para seguir comprando")
  }

  return (
    <div> 
      <ItemCount stock={20} initial={1} onAdd={onAdd} />
      <ItemListContainer saludo='He luchado mucho tiempo por sobrevivir, pero no importa qué, siempre tienes que encontrar algo por lo que luchar. THE LAST OF US'/>
      <ItemDetailContainer/>
    </div>
  )
}

export default Main