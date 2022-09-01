import React, { useEffect } from 'react'
import { productos } from './Item'
import { useState } from 'react'
import ItemList from './ItemList'
const ItemListContainer = (props) => {
  const [item, setitem] = useState([])

  useEffect(() => {
    const getProducts = new Promise ((res, rej) => {
      setTimeout(() =>{
        res(productos);
        }, 4000);
      });
        getProducts.then((info) => {
          setitem(info);
            })
            .catch((error) => {
              console.log('error 501')
                })
                .finally(() =>{
                  console.log('Gracias por la espera');
                  })
  

  })
  const {saludo} = props
  return (
    <div>
      <ItemList.jsx mandar={item}/> 
    </div>
  )
}

export default ItemListContainer