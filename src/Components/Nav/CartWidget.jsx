import React from 'react'
import { useContext } from 'react';
import { BiCart } from 'react-icons/bi';
import { cardContext } from '../../Context/CardContext';

const CartWidget = () => {

  const {totalQuantity} = useContext(cardContext)
  
  return (<>
    <BiCart style={{color: 'black', fontSize: '25px', marginTop: '15px'}}/>
    <span style={{fontSize: '28px', textDecoration: 'none', fontFamily:'Roboto'}}>{totalQuantity()}</span>
    </>
  )
}

export default CartWidget