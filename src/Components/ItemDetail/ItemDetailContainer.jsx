import React from 'react'
import { useEffect } from 'react'
import { productos } from '../ItemListContainer/Mock'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
const [product, setProduct] = useState({})

const { itemId } = useParams();

    useEffect(() => { 
    const getDetail = new Promise ((res, rej) => {
        const descriptionId = productos.find ( (produ) => produ.id === itemId)
        setTimeout(() => {
            res(itemId ? descriptionId : productos)
        }, 500); 
    });
        getDetail.then((data) => {
            setProduct(data);
        })
        .catch(() => {
            console.log('Error 404 Not found')
        });
}, [itemId] );
  return (
    <div>
        <ItemDetail producto={product}/>
    </div>
  )
}

export default ItemDetailContainer