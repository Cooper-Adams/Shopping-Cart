import { CartContext } from '../contexts/CartContext'
import CartItemCard from '../components/CartItemCard'
import Header from '../components/Header'
import React, { useContext, useState } from 'react'
import '../styles/Cart.css'

const Cart = () => {
    const { cart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    return (
        <>
            <Header />

            {/* {loading && cart.length != 0 && ( <div className='lds-dual-ring'></div> )} */}

            {!loading && (
                <>
                    <h1 className='cart-title'>YOUR SHOPPING CART</h1>

                    <div className='cart-cont'>
                        {cart.length == 0 && (
                            <h2 className='cart-empty'>Your cart is empty!</h2>
                        )}

                        {cart.length != 0 && (
                            cart.map((game) => {
                                return (
                                    <CartItemCard 
                                        game = {game}
                                        setLoading = {setLoading}
                                    />
                                )
                            })
                        )}
                    </div>
                </>
            )}
        </>
    )
}

export default Cart