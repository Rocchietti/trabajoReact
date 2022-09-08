import React, { useEffect } from 'react'
import { productos } from './Mock'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
const ItemListContainer = (props) => {
  const [items, setitems] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
    const getProducts = new Promise ((res, rej) => {
      const prodFiltrados = productos.filter((produ) => produ.category === categoryId)
      setTimeout(() =>{
        res(categoryId ? prodFiltrados : productos);
        }, 500);
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

  }, [categoryId]);
  return (
    <div>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer