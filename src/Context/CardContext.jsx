import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const cardContext = createContext();


const CardContext = ({children}) => {
  const [cart, setCart] = useState([])


  const addItem = (item, counting) => {
  IsinCart(item.id) ? addCouting(item, counting) : setCart([...cart,{...item, counting}])
  } 

  const addCouting = (item, counting) => {
    const updateCart = cart.map((prod) => prod.id === item.id ? {...item, counting: prod.counting + counting}: prod)
    setCart(updateCart)
  }

  const IsinCart = (id) => {
    return cart.some((item) => item.id === id )
  }

  const clearCart = () => {
    setCart([])
  }

  const deleteProd = (id) => {
    console.log(`eliminando producto ${id}`);
    const deletpr = cart.filter((prod) => prod.id !== id)
    setCart(deletpr)
  }

  return   <cardContext.Provider value={{cart, addItem, clearCart, deleteProd}}>
    {children}
  </cardContext.Provider>
}

export default CardContext