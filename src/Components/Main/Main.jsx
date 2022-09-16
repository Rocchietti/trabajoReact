import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './main.css';
const Main = () => {
  

  return (
    <div> 
        <Routes> 
          <Route 
          path= '/' 
          element={<ItemListContainer/>} />
          <Route 
          path= '/item/:itemId' 
          element={<ItemDetailContainer/>} />
          <Route
          path= '/category/:categoryId' 
          element={<ItemListContainer/>} />
        </Routes>
    </div>
  )
}

export default Main