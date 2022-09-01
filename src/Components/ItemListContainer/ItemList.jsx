import React from 'react'
import Item from './Item';

const ItemList = ({items}) => {
  return (
  <div>
    {
        items.map((item) => {
            return(
                <div key={item.id}>
                    <Item item={item} key={item.id}/>
                </div>
            )
        })
    }
  </div>
)
};

export default ItemList