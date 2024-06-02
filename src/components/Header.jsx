import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import getGames from '../functions/getGames'
import React, { useContext, useState } from 'react'
import '../styles/Header.css'

const Header = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const { cart } = useContext(CartContext)

    const handleChange = (e) => { setSearchTerm(e.target.value) }

    const onSubmit = async(e) => {
        e.preventDefault()
        let newSlug = searchTerm.split(' ').join('-').toLowerCase()

        try {
            props.setGames(getGames(('https://rawg.io/api/games?key=hellorobots&search=' + newSlug).then(resp => resp.json())))
        } catch (e) {
            console.error(e)
        } finally {
            setSearchTerm('')
        }
    }

    return (
        <nav className='cart-nav'>
            <div className='left-nav'>
                <Link className='nav-link' to='/'>Home</Link>
            </div>

            <div className='middle-nav'>
                <form onSubmit={onSubmit}>
                    <input className='nav-search' type='search' placeholder='Search games...' value={searchTerm} onChange={handleChange}/>
                </form>
            </div>

            <div className='right-nav'>
                <Link className='nav-link' to='/library'>LIBRARY</Link>
                <Link className='nav-link' to='/cart'>
                    CART
                    {cart.length > 0 && (
                        <div className='cart-count'>
                            {cart.length}
                        </div>
                    )}
                </Link>
            </div>
        </nav>
    )
}

export default Header