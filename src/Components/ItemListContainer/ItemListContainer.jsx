import React, { useEffect } from 'react'
import { productos } from './Mock'
import { useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [items, setitems] = useState([])
  useEffect(() => { 
    const getDetail = new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 500); 
    });
        getDetail.then((data) => {
            setitems(data);
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
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer