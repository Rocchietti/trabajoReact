import React, { useEffect } from 'react'
import { productos } from './Mock'
import { useState } from 'react'
import ItemList from './ItemList'
const ItemListContainer = (props) => {
  const [items, setitems] = useState([])

  useEffect(() => {
    const getProducts = new Promise ((res, rej) => {
      setTimeout(() =>{
        res(productos);
        }, 2000);
      });
        getProducts.then((data) => {
          setitems(data);
            })
            .catch(() => {
              console.log('error 501')
                })
                .finally(() =>{
                  console.log('Gracias por la espera');
                  })

  }, []);
  const {saludo} = props
  return (
    <div>
      <h1>{saludo}</h1>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer