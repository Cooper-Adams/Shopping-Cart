import { CartContext } from '../contexts/CartContext'
import getGames from '../functions/getGames'
import React, { useContext, useEffect, useState } from 'react'
import '../styles/Cart.css'

const CartItemCard = (props) => {
    const { cart, setCart } = useContext(CartContext)
    const [game, setGame] = useState([])

    useEffect(() => {
        async function retrieveGameInfo() {
            try {
                setGame(await getGames('https://api.rawg.io/api/games/' + props.game.slug + '?key=hellorobots'))
            } catch (err) {
                console.log(err)
            } finally {
                props.setLoading(false)
            }
        }

        retrieveGameInfo()
    }, [])

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
                <img className='cic-img' src={game.background_image} alt={'Background image for ' + game.name}/>
                <h4 className='cic-name'>{game.name}</h4>
            </div>

            <div className='cic-end'>
                <span className='cic-price'>$69.99</span>
                <button className='pd-rm' onClick={removeGame}>Remove</button>
            </div>
        </div>
    )
}

export default CartItemCard