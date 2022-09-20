import React from 'react';
import { item } from '../App';

interface shoppingListProps{
    items:item[]
}


export default function ShoppingList({items}:shoppingListProps):JSX.Element{
    
    return(<div>
        <h1>Shopping List</h1>
        <ul>
            {items.map((el:item)=>(
             <li key={el.id}>{el.product} - {el.quantity}</li>
            ))}
        </ul>
    </div>)
}