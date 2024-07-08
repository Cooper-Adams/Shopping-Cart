import { CartContext } from '../contexts/CartContext'
import { LibraryContext } from '../contexts/LibraryContext'
import CartItemCard from '../components/CartItemCard'
import Header from '../components/Header'
import React, { useContext, useState } from 'react'
import '../styles/Cart.css'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const { library, setLibrary } = useContext(LibraryContext)
    const [loading, setLoading] = useState(false)

    const fakePurchase = () => {
        let tempLibrary = library

        cart.forEach((game) => {
            tempLibrary.push(game)
        })

        setLibrary(tempLibrary)
        
        setCart([])
    }

    const removeAll = () => { setCart([]) }

    return (
        <>
            <Header />

            {loading && cart.length != 0 && ( <div className='lds-dual-ring'></div> )}

            {!loading && (
                <>
                    <div className='cart-cont'>
                        <div className='ic-cont'>
                            <h1 className='cart-title'>YOUR SHOPPING CART</h1>

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

                            <div className='purchase-div'>
                                <div className='pd-top'>
                                    <span>Estimated Total:</span>

                                    <span>${(69.99 * cart.length)}</span>
                                </div>

                                
                                <div className='pd-btns'>
                                    <button className='pd-rm' onClick={removeAll}>Remove all</button>
                                    <button className='pd-btn' onClick={fakePurchase}>Purchase</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Cart