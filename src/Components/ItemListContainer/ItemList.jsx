import React from 'react'
import Item from './Item';
import './card.css'

const ItemList = ({items}) => {

  return (
  <div className='Card'>
    {
        items.map((item) => {
            return(
                <div key={item.id}>
                    <Item item={item}/>
                </div>
            )
        })
    }
  </div>
)
};

export default ItemList