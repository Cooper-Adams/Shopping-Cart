import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CCProvider = (props) => {
    const [cart, setCart] = useState([])

    const ccValue = {
        cart,
        setCart,
    }

    return (
        <CartContext.Provider value={ccValue}>
            {props.children}
        </CartContext.Provider>
    )
}