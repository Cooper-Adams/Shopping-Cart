import { CartContext } from '../contexts/CartContext'
import React, { useContext } from 'react'
import '../styles/Cart.css'

const CartItemCard = (props) => {
    const { cart, setCart } = useContext(CartContext)

    const removeGame = () => {
        var array = [...cart]
        var index = -1

        for (let i = 0; i < array.length; ++i) {
            if (array[i].slug === props.game.slug) {
                index = i
            }
        }

        if (index !== -1) {
            array.splice(index, 1)
            setCart(array)
        }
    }

    return (
        <div className='cic-game'>
            <div className='cic-begin'>
                <img className='cic-img' src={props.game.background_image} alt={'Background image for ' + props.game.name}/>
                <h4 className='cic-name'>{props.game.name}</h4>
            </div>

            <div className='cic-end'>
                <span className='cic-price'>$69.99</span>
                <button className='pd-rm' onClick={removeGame}>Remove</button>
            </div>
        </div>
    )
}

export default CartItemCard