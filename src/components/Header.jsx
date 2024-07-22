import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import { QueryContext } from '../contexts/QueryContext'
import React, { useContext } from 'react'
import '../styles/Header.css'

const Header = () => {
    const { cart } = useContext(CartContext)
    const { searchBar, setPage, setSearch, setSearchBar } = useContext(QueryContext)

    const handleChange = (e) => { setSearchBar(e.target.value) }

    const onSubmit = async(e) => {
        e.preventDefault()
        setPage(1)
        setSearch(searchBar.split(' ').join('-').toLowerCase())
    }

    return (
        <>
            <nav className='cart-nav'>
                <div className='left-nav'>
                    <Link className='nav-link logo' to='/'>Video{'\n'}Gamazon</Link>
                </div>

                <div className='middle-nav'>
                    <form onSubmit={onSubmit}>
                        <input className='nav-search' type='search' placeholder='Search games...' value={searchBar} onChange={handleChange}/>
                    </form>
                </div>

                <div className='right-nav'>
                    <Link className='nav-link' to='/library'><svg height='24' width='24' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' fill='#c7d5e0' stroke='#c7d5e0'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' stroke='#CCCCCC' strokeWidth='7.168000000000001'></g><g id='SVGRepo_iconCarrier'> <title>My Library</title> <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'> <g id='Combined-Shape' fill='#c7d5e0' transform='translate(42.666667, 85.333333)'> <path d='M3.55271368e-14,298.666667 L426.666667,298.666667 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,298.666667 Z M42.6666667,1.42108547e-14 L106.666667,1.42108547e-14 L106.666667,277.333333 L42.6666667,277.333333 L42.6666667,1.42108547e-14 Z M128,21.3333333 L192,21.3333333 L192,277.333333 L128,277.333333 L128,21.3333333 Z M288.933802,36.9522088 L351.961498,25.8387255 L399.909944,277.333333 L330.641827,277.70319 L288.933802,36.9522088 Z M213.333333,21.3333333 L277.333333,21.3333333 L277.333333,277.333333 L213.333333,277.333333 L213.333333,21.3333333 Z'> </path> </g> </g> </g></svg></Link>
                    <Link className='nav-link' to='/cart'>
                        <svg height='24' width='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M11.25 18.75C11.25 19.58 10.58 20.25 9.75 20.25C8.92 20.25 8.25 19.58 8.25 18.75C8.25 17.92 8.92 17.25 9.75 17.25C10.58 17.25 11.25 17.92 11.25 18.75ZM16.25 17.25C15.42 17.25 14.75 17.92 14.75 18.75C14.75 19.58 15.42 20.25 16.25 20.25C17.08 20.25 17.75 19.58 17.75 18.75C17.75 17.92 17.08 17.25 16.25 17.25ZM20.73 7.68L18.73 15.68C18.65 16.01 18.35 16.25 18 16.25H8C7.64 16.25 7.33 15.99 7.26 15.63L5.37 5.25H4C3.59 5.25 3.25 4.91 3.25 4.5C3.25 4.09 3.59 3.75 4 3.75H6C6.36 3.75 6.67 4.01 6.74 4.37L7.17 6.75H20C20.23 6.75 20.45 6.86 20.59 7.04C20.73 7.22 20.78 7.46 20.73 7.68ZM19.04 8.25H7.44L8.62 14.75H17.41L19.04 8.25Z' fill='#c7d5e0'></path> </g></svg>
                        {cart.length > 0 && (
                            <div className='cart-count'>
                                <svg height='12' width='12' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='none'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'><path fill='#66c0f4' d='M8 3a5 5 0 100 10A5 5 0 008 3z'></path></g></svg>
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