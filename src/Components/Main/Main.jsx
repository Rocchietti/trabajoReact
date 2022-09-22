import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
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
          <Route path= '/cart' element={<Cart/>} />
        </Routes>
    </div>
  )
}

export default Main