import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { productos } from '../ItemListContainer/Mock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
const [product, setProduct] = useState([])

    useEffect(() => { 
    const getDetail = new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 100); 
    });
        getDetail.then((data) => {
            setProduct(data);
        })
        .catch(() => {
            console.log('Error 404 Not found')
        })
        .finally(() => {
            console.log('TERMINAMO PA')
        })
}, [] );

  return (
    <div>
        <ItemDetail producto={product}/>
    </div>
  )
}

export default ItemDetailContainer