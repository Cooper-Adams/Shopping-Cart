import { QueryContext } from '../contexts/QueryContext'
import Header from './Header'
import ItemCard from './ItemCard'
import React, { useContext } from 'react'
import ResultBar from './ResultBar'
import { useQuery } from 'react-query'
import '../styles/Shop.css'

const Shop = () => {
    const { page, sort, setPage, setSort, query } = useContext(QueryContext)

    const { data: games, error, isLoading, } = useQuery(['getResults', query], async () => await(await fetch(`/.netlify/functions/getResults?query=${query}`)).json(), { refetchOnWindowFocus: false})

    window.scrollTo(0, 0)

    const changePage = (button) => {
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

                        {games.count != 0 && (<>
                            <div className='product-grid'>
                                {games.results.map((game) => {
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

                            <div className='pagination-div'>
                                <button className='pagination-btn prev' onClick={changePage}>{'<'}</button>
                                <span className='pagination-numeration'>{'Page ' + page + ' of ' + Math.ceil(games.count / 20)}</span>
                                <button className='pagination-btn' onClick={changePage}>{'>'}</button>
                            </div>
                        </>)}

                        {games.count == 0 && (<>
                            <h3 className='no-results'>There are no results. Please search again.</h3>
                        </>)}
                    </>)}
                </div>
            </div>
        </>
    )
}

export default Shop