import React, { useEffect } from 'react'
import { productos } from './Mock'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [items, setitems] = useState([]);

  const {categoryId} = useParams();
  useEffect(() => {
      const getElement = new Promise ((res, rej) => {
        const produFiltrados = productos.filter ( (produ) => produ.category === categoryId)
        setTimeout(() =>{
          res(categoryId ? produFiltrados : productos);
          }, 300);
        });
          getElement.then((data) => {
            setitems(data);
              })
              .catch(() => {
                console.log('error 501')
                  });
  }, [categoryId]);
  return (
    <div>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer