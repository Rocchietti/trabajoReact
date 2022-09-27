import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const cardContext = createContext();


const CardContext = ({children}) => {
  const [cart, setCart] = useState([])



  const addItem = (item, counting) => {
  IsinCart(item.id) ? addCounting(item, counting) : setCart([...cart,{...item, counting}])
  } 

  const addCounting = (item, counting) => {
    const updateCart = cart.map((prod) => prod.id === item.id ? {...item, counting: counting}: prod)
    setCart(updateCart)
  }

  const IsinCart = (id) => {
    return cart.some((item) => item.id === id )
  }

  const clearCart = () => {
    setCart([])
  }

  const deleteProd = (id) => {
    const deletpr = cart.filter((prod) => prod.id !== id)
    setCart(deletpr)
    console.log(`eliminando producto ${id}`);
  }

  const quantProdu = (id) => {
    const object = cart.find((prod) => prod.id === id );
    return object?.counting
  };

  const totalQuantity = () => {
    let acumulador = 0;
    for (const prod of cart) {
      acumulador += prod.counting
    }
    return acumulador
  }

  const totalPrice = () => {
    let acumulador = 0;
    cart.forEach((prod) => {
      acumulador += prod.price * prod.counting
    });
    return acumulador;
  };

  return   <cardContext.Provider value={{cart, addItem, clearCart, deleteProd,totalPrice, quantProdu, totalQuantity}}>
    {children}
  </cardContext.Provider>
}

export default CardContext