import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import './CartItem.css';

export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className='cart-info-container'>
                <p>{item.title}</p>
                <p>precio unitario: {item.price}</p>
                <p>cantidad: {item.quantity}</p>
                <p>Precio total: {item.totalPrice}</p>
                <button onClick={()=>removeProduct(item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}
