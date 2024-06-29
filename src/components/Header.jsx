import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import { QueryContext } from '../contexts/QueryContext'
import React, { useContext, useEffect, useState } from 'react'
import '../styles/Header.css'

const Header = () => {
    const { cart } = useContext(CartContext)
    const { searchBar, setSearch, setSearchBar } = useContext(QueryContext)

    const handleChange = (e) => { setSearchBar(e.target.value) }

    const onSubmit = async(e) => {
        e.preventDefault()
        setSearch(searchBar.split(' ').join('-').toLowerCase())
    }

    return (
        <>
            <nav className='cart-nav'>
                <div className='left-nav'>
                    <Link className='nav-link' to='/'>Home</Link>
                </div>

                <div className='middle-nav'>
                    <form onSubmit={onSubmit}>
                        <input className='nav-search' type='search' placeholder='Search games...' value={searchBar} onChange={handleChange}/>
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

            <Link to='https://rawg.io' target='_blank' rel='noopener noreferrer'>
                <div className='rawg'>
                    <h5 className='rawg-title'>POWERED BY R A W G</h5>
                </div>
            </Link>
        </>
    )
}

export default Header