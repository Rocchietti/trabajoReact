import React from 'react'
import Item from './Item';
import './card.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemList = ({items}) => {

  return (
  <div className='Card'>
    {
        items.map((item) => {
            return(
                <div className='kard' key={item.id}>
                    <Item item={item}/>
                    <ItemCount/>
                </div>
            )
        })
    }
  </div>
)
};

export default ItemList