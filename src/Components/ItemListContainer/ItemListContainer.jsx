import React, { useEffect } from 'react'
import { productos } from './Mock'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ItemList from './ItemList'
import ClipLoader from "react-spinners/ClipLoader"

const ItemListContainer = () => {
  const [items, setitems] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);


  const {categoryId} = useParams();
  useEffect(() => {
      const getElement = new Promise ((res, rej) => {
        const produFiltrados = productos.filter ( (produ) => produ.category === categoryId)
        setTimeout(() =>{
          res(categoryId ? produFiltrados : productos);
          }, 1500);
        });
          getElement.then((data) => {
            setitems(data);
            setIsLoading(false)
              })
              .catch(() => {
                console.log('error 501')
                  });
                  return () => {
                    setIsLoading (true);
                  };
  }, [categoryId]);
  return (
    <div style={{display:'flex', justifyContent:'center', margin:'60px '}}>
      {
        isLoading ? <>
        <h2>Cargando...</h2>
        <ClipLoader color={'#36d7b7'} size={150} />
        </> 
        : <ItemList items={items}/>
      }
    </div>
  )
}

export default ItemListContainer