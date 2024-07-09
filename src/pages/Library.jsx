import { LibraryContext } from '../contexts/LibraryContext'
import Header from '../components/Header'
import ItemCard from '../components/ItemCard'
import React, { useContext } from 'react'
import '../styles/Library.css'

const Library = () => {
    const { library } = useContext(LibraryContext)

    return (
        <>
            <Header />

            <div className='library-cont'>
                <h1 className='library-header'>My Library</h1>

                <div className='library-pg-container'>
                    {library.length != 0 && <>
                        <div className='library-product-grid'>
                            {library.map((game) => {
                                return (
                                    <ItemCard
                                        id = {game.id}
                                        image = {game.background_image}
                                        name = {game.name}
                                        platforms = {game.platforms}
                                        rating = {game.rating}
                                        rating_top = {game.rating_top}
                                        slug = {game.slug}
                                        key = {game.id}
                                    />
                                )
                            })}
                        </div>
                    </>}

                    {library.length == 0 && <>
                        <h3 className='library-empty'>Your library is empty. Go buy some games!</h3>
                    </>}
                </div>
            </div>
        </>
    )
}

export default Library