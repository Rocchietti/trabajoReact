import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { productos } from '../ItemListContainer/Mock'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
const [product, setProduct] = useState([])
  
const {categoryId} = useParams()

  useEffect(() => {
    const getProducts = new Promise ((res, rej) => {
      const prodFiltrados = productos.filter((produ) => produ.category === categoryId)
      setTimeout(() =>{
        res(categoryId ? prodFiltrados : productos);
        }, 500);
      });
        getProducts.then((data) => {
          setProduct(data);
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
        <ItemDetail producto={product}/>
    </div>
  )
}

export default ItemDetailContainer