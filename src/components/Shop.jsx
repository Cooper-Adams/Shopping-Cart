import { QueryContext } from '../contexts/QueryContext'
import getGames from '../functions/getGames'
import Header from './Header'
import ItemCard from './ItemCard'
import React, { useContext, useEffect, useState } from 'react'
import ResultBar from './ResultBar'
import '../styles/Shop.css'

const Shop = () => {
    const { page, query, sort, setPage, setSort } = useContext(QueryContext)
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

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
            if (page != 1) {
                setPage(page - 1)
            }
        } else {
            if (page != Math.ceil(games.count / 20)) {
                setPage(page + 1)
            }
        }
    }

    const updateSorting = (e) => { setSort(e.target.selectedOptions[0].value) }

    return (
        <>
            <Header setGames={setGames} />

            <div className='product-cont'>
                <ResultBar
                    number = {games.count}
                />
                
                <div className='pg-container'>
                    {loading && ( <div className='lds-dual-ring'></div> )}
                    
                    {!loading && (<>
                        <div className="select">
                            <label className='sort-label' htmlFor='sort'> Sort by:</label>
                            <select className='result-sort' name='ordering' id='sort' onChange={updateSorting} value={sort}>
                                <option className='sort-option' value='metacritic'>Metacritic Score</option>
                                <option className='sort-option' value='name'>Name</option>
                                <option className='sort-option' value='added'>Popularity</option>
                                <option className='sort-option' value='released'>Release Date</option>
                                <option className='sort-option' value='rating'>User Rating</option>
                            </select>
                        </div>

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
                            <button className='pagination-btn prev' onClick={changePage}>{'<'}</button>
                            <span className='pagination-numeration'>{'Page ' + page + ' of ' + Math.ceil(games.count / 20)}</span>
                            <button className='pagination-btn' onClick={changePage}>{'>'}</button>
                        </div>
                    </>)}
                </div>
            </div>
        </>
    )
}

export default Shop