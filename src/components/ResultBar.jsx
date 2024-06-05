import '../styles/ResultBar.css'
import React, { useState } from 'react'

const ResultBar = () => {
    const [searchStatement, setSearchStatement] = useState('Showing most popular games')

    const submit = (e) => {
        console.log(e)
    }

    return (
        <div className='shop-resultsbar'>
            <h4 className='srb-statement'>{searchStatement}</h4>    

            <form className='srb-form' action=''>
                <div className='select-wrapper'>
                    <select className='srb-ordering' name='tags' id='tag-select' onChange={submit} defaultValue={''}>
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
                    <select className='srb-ordering' name='genre' id='genre-select' defaultValue={''}>
                        <option style={{display: 'none'}} value='' disabled>Genre</option>
                        <option className='srb-option' value='added'>Relevance</option>
                        <option className='srb-option' value='released'>Release Date</option>
                        <option className='srb-option' value='name'>Name</option>
                        <option className='srb-option' value='rating'>User Rating</option>
                        <option className='srb-option' value='metacritic'>Metacritic Score</option>
                    </select>
                </div>

                <div className='select-wrapper'>
                    <select className='srb-ordering' name='ordering' id='ordering-select'>
                        <option className='srb-option' value='added'>Relevance</option>
                        <option className='srb-option' value='released'>Release Date</option>
                        <option className='srb-option' value='name'>Name</option>
                        <option className='srb-option' value='rating'>User Rating</option>
                        <option className='srb-option' value='metacritic'>Metacritic Score</option>
                    </select>
                </div>

                <div className='select-wrapper'>
                    <select className='srb-ordering' name='flip' id='ordering-flip'>
                        <option className='srb-option' value=''>Descending</option>
                        <option className='srb-option' value='-'>Ascending</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default ResultBar