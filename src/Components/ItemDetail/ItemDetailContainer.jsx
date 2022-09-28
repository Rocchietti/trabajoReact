import React from 'react'
import { useEffect } from 'react'
// import { productos } from '../ItemListContainer/Mock'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ItemDetail from './ItemDetail'
import ClipLoader from 'react-spinners/ClipLoader'
import { db } from '../../Firebase/firebaseConfig'
import { collection, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

const [isLoading, setIsLoading] = useState(true);

const [product, setProduct] = useState({})

const { itemId } = useParams();

    useEffect(() => { 
    const itemCollection = collection(db, 'Productos')
    const detalle = doc(itemCollection, itemId)
    getDoc(detalle) 
    .then((res)=> {
        setProduct({
            id: res.id,
            ...res.data()
        }
        )
        setIsLoading(false)
    })
    .catch(() => {
        console.log('error 501')
    });
    return (() => {
        setIsLoading(false)
    })
}, [itemId] );
  return (
    <div style={{display:'flex', justifyContent:'center', margin:'60px '}}>
        {
        isLoading ? <>
        <h2>Cargando...</h2>
        <ClipLoader color={'#36d7b7'} size={150}/>
        </>
        : <ItemDetail producto={product}/>        
        }
    </div>
  )
}

export default ItemDetailContainer



// const getDetail = new Promise ((res, rej) => {
//     const descriptionId = productos.find ( (produ) => produ.id === itemId)
//     setTimeout(() => {
//         res(itemId ? descriptionId : productos)
//     }, 1500); 
// });
//     getDetail.then((data) => {
//         setProduct(data);
//         setIsLoading(false)
//     })
//     .catch(() => {
//         console.log('Error 404 Not found')
//     });