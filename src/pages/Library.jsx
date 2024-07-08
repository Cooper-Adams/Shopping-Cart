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
                    <div className='library-product-grid'>
                        {library.map((game) => {
                            return (
                                <ItemCard
                                    game = {game}
                                    key = {game.id}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Library