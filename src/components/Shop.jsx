import { QueryContext } from '../contexts/QueryContext'
import getGames from '../functions/getGames'
import Header from './Header'
import ItemCard from './ItemCard'
import React, { useContext, useEffect, useState } from 'react'
import ResultBar from './ResultBar'
import '../styles/Shop.css'

const Shop = () => {
    const { order, page, setPage, pageSize, sort, query, setQuery, queryGenre, queryTag } = useContext(QueryContext)
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setQuery('https://api.rawg.io/api/games?key=hellorobots&stores=1&page=' + page + '&' + pageSize + '&' + order + sort + (queryTag != '' ? ('&tags=' + queryTag) : '') + (queryGenre != '' ? ('&genres=' + queryGenre) : ''))
    }, [page, sort, order, queryGenre, queryTag])

    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true)
                setGames(await getGames(query))
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        
        fetchGames()
    }, [query])

    const changePage = (button) => {
        window.scrollTo(0, 0)

        if (button.target.classList.contains('prev')) {
            setPage(page - 1)
        } else {
            setPage(page + 1)
        }
    }

    return (
        <>
            <Header setGames={setGames} />

            <div className='shop-cont'>
                <div className='product-cont'>
                    <ResultBar />
                    
                    {loading && ( <div className='lds-dual-ring'></div> )}

                    {!loading && (<>
                        <div className='product-grid'>
                            {games.results.map((game) => {
                                return (
                                    <ItemCard
                                        game = {game}
                                        key = {game.id}
                                    />
                                )
                            })}
                        </div>

                        <div className='pagination-div'>
                            <button className='pagination-btn prev' onClick={changePage}>Prev</button>
                            <button className='pagination-btn' onClick={changePage}>Next</button>
                        </div>
                    </>)}
                </div>
            </div>
        </>
    )
}

export default Shop