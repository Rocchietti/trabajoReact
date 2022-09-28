import React, { useEffect } from 'react'
// import { productos } from './Mock'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Firebase/firebaseConfig'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ItemList from './ItemList'
import ClipLoader from "react-spinners/ClipLoader"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);


  const {categoryId} = useParams();

  
  useEffect(() => {
    const itemCollection = collection(db, 'Productos')
    const detalles = categoryId ? query(itemCollection, where('category', '==', categoryId)) : itemCollection;
    getDocs(detalles)
    .then((res) => {
      const productos = res.docs.map((prod)=> {
        return {
          id: prod.id,
          ...prod.data()
        }
      });
      setItems(productos);
      setIsLoading(false)
    })
    .catch(() => {
    console.log('error 501')
    });
    return (() => {
      setIsLoading(true);
    })
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