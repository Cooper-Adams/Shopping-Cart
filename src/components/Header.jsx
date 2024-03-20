import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import '../styles/Header.css'

const Header = () => {
    const cartGames = useContext(CartContext)

    return (
        <nav className='cart-nav'>
            <div className='left-nav'>
                <Link className='nav-link' to='/'>Home</Link>
            </div>

            <div className='middle-nav'>
                <input className='nav-search' type='search' placeholder='Search games...'/>
            </div>

            <div className='right-nav'>
                <Link className='nav-link' to='/library'>LIBRARY</Link>
                <Link className='nav-link' to='/cart'>
                    CART
                    {cartGames.length > 0 && (
                        <div className='cart-count'>
                            {cartGames.length}
                        </div>
                    )}
                </Link>
            </div>
        </nav>
    )
}

export default Header