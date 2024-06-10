import '../styles/ResultBar.css'
import { QueryContext } from '../contexts/QueryContext'
import React, { useContext, useState } from 'react'

const ResultBar = () => {
    const { sort, order, queryTag, queryGenre, setOrder, setSort, setQueryGenre, setQueryTag } = useContext(QueryContext)
    const [genre, setGenre] = useState('Default')
    const [searchStatement, setSearchStatement] = useState('Showing most popular games')
    const [tag, setTag] = useState('Default')

    const clearQuery = (e) => {
        setGenre('Default')
        setSearchStatement('Showing most popular games')
        setTag('Default')
    }

    const updateQuery = (e) => {
        if (e.target.id == 'tag') {
            setTag(e.target.selectedOptions[0].text)
            setQueryTag(e.target.selectedOptions[0].value)

            if (genre == 'Default') {
                setSearchStatement('Showing games tagged "' + e.target.selectedOptions[0].text + '"')
            } else {
                setSearchStatement('Showing games tagged "' + e.target.selectedOptions[0].text + '" in the ' + genre + ' genre')
            }
        } else if (e.target.id == 'genre') {
            setGenre(e.target.selectedOptions[0].text)
            setQueryGenre(e.target.selectedOptions[0].value)

            if (tag == 'Default') {
                setSearchStatement('Showing games in the ' + e.target.selectedOptions[0].text + ' genre')
            } else {
                setSearchStatement('Showing games tagged "' + tag + '" in the ' + e.target.selectedOptions[0].text + ' genre')
            }
        } else if (e.target.id == 'sort') {
            setSort(e.target.selectedOptions[0].value)
        } else if (e.target.id == 'order') {
            setOrder(e.target.selectedOptions[0].value)
        }
    }

    return (
        <div className='shop-resultsbar'>
            <h4 className='srb-statement'>{searchStatement}</h4>    

            <form className='srb-form' action=''>
                <div className='select-wrapper'>
                    <select className='srb-ordering' name='tags' id='tag' onChange={updateQuery} value={queryTag}>
                        <option style={{display: 'none'}} value='' disabled>Tags</option>
                        <option className='srb-option' value='45'>2D</option>
                        <option className='srb-option' value='69'>Action-Adventure</option>
                        <option className='srb-option' value='18'>Co-Op</option>
                        <option className='srb-option' value='8'>First-Person</option>
                        <option className='srb-option' value='40836'>Full Controller Support</option>
                        <option className='srb-option' value='16'>Horror</option>
                        <option className='srb-option' value='7'>Multiplayer</option>
                        <option className='srb-option' value='36'>Open-World</option>
                        <option className='srb-option' value='24'>RPG</option>
                        <option className='srb-option' value='32'>Sci-Fi</option>
                        <option className='srb-option' value='31'>Singleplayer</option>
                        <option className='srb-option' value='118'>Story Rich</option>
                        <option className='srb-option' value='1'>Survival</option>
                        <option className='srb-option' value='149'>Third-Person</option>
                    </select>
                </div>

                <div className='select-wrapper'>
                    <select className='srb-ordering' name='genre' id='genre' onChange={updateQuery} value={queryGenre}>
                        <option style={{display: 'none'}} value='' disabled>Genre</option>
                        <option className='srb-option' value='4'>Action</option>
                        <option className='srb-option' value='3'>Adventure</option>
                        <option className='srb-option' value='11'>Arcade</option>
                        <option className='srb-option' value='28'>Board Games</option>
                        <option className='srb-option' value='17'>Card</option>
                        <option className='srb-option' value='40'>Casual</option>
                        <option className='srb-option' value='34'>Educational</option>
                        <option className='srb-option' value='19'>Family</option>
                        <option className='srb-option' value='6'>Fighting</option>
                        <option className='srb-option' value='51'>Indie</option>
                        <option className='srb-option' value='83'>Platformer</option>
                        <option className='srb-option' value='7'>Puzzle</option>
                        <option className='srb-option' value='1'>Racing</option>
                        <option className='srb-option' value='5'>RPG</option>
                        <option className='srb-option' value='2'>Shooter</option>
                        <option className='srb-option' value='14'>Simulation</option>
                        <option className='srb-option' value='15'>Sports</option>
                        <option className='srb-option' value='10'>Strategy</option>
                    </select>
                </div>

                <div className='select-wrapper'>
                    <select className='srb-ordering' name='ordering' id='sort' onChange={updateQuery} value={sort}>
                        <option className='srb-option' value='added'>Popularity</option>
                        <option className='srb-option' value='released'>Release Date</option>
                        <option className='srb-option' value='name'>Name</option>
                        <option className='srb-option' value='rating'>User Rating</option>
                        <option className='srb-option' value='metacritic'>Metacritic Score</option>
                    </select>
                </div>

                <div className='select-wrapper'>
                    <select className='srb-ordering' name='flip' id='order' onChange={updateQuery} value={order}>
                        <option className='srb-option' value='ordering=-'>Descending</option>
                        <option className='srb-option' value='ordering='>Ascending</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default ResultBar