import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CCProvider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (gameID) => {
        setCart((prev) => ({ ...prev, [gameID]: prev[gameID] + 1 }))
    }

    const removeFromCart = (gameID) => {
        setCart((prev) => ({ ...prev, [gameID]: prev[gameID] - 1 }))
    }

    const changeCount = (newAmount, gameID) => {
        setCart((prev) => ({ ...prev, [gameID]: newAmount }))
    }

    const ccValue = {
        cart,
        addToCart,
        removeFromCart,
        changeCount
    }

    return (
        <CartContext.Provider value={ccValue}>
            {props.children}
        </CartContext.Provider>
    )
}