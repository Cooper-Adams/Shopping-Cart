import { QueryContext } from '../contexts/QueryContext'
import getGames from '../functions/getGames'
import Header from './Header'
import ItemCard from './ItemCard'
import React, { useContext } from 'react'
import ResultBar from './ResultBar'
import { useQuery } from 'react-query'
import '../styles/Shop.css'

const Shop = () => {
    const { page, sort, setPage, setSort, query } = useContext(QueryContext)

    const { data: games, error, isLoading, } = useQuery(['gamesData', query], () => getGames(query), { refetchOnWindowFocus: false})

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
            <Header />

            <div className='product-cont'> 
                <ResultBar number = {games != undefined ? games.count : null}/>
                    
                <div className='pg-container'>
                    {isLoading && ( <div className='lds-dual-ring'></div> )}
                    
                    {!isLoading && (<>
                        <div className='select'>
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