import { CCProvider } from '../contexts/CartContext'
import CartItemCard from '../components/CartItemCard'
import Header from '../components/Header'
import React, { useContext } from 'react'

const Cart = () => {
    return (
        <>
            <Header />

            <div className='cart-cont'>
                <h1>THIS IS WHERE THE GAMES YOU ADD GO</h1>
            </div>
        </>
    )
}

export default Cart