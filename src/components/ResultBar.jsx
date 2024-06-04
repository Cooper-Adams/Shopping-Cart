import '../styles/ResultBar.css'
import React, { useState } from 'react'

const ResultBar = () => {
    const [searchStatement, setSearchStatement] = useState('Showing games released this month')

    const toggleDropdown = (e) => { e.target.classList.toggle('is-active') }

    const toggleSP = (e) => { 
        e.stopPropagation()
        e.target.classList.toggle('selected')
    }

    return (
        <div className='shop-resultsbar'>
            <h3 className='srb-statement'>{searchStatement}</h3>

            <form className='srb-form' action=''>
                <div className='scs-def-tags' onClick={toggleDropdown}>
                    Narrow by tag
                    <ul onClick={toggleSP} className='scs-cdl'>
                        <li>
                            <label>
                                <input type='checkbox' value={45} name='tag' />
                                2D
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={69} name='tag' />
                                Action-Adventure
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={18} name='tag' />
                                Co-op
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={8} name='tag' />
                                First-Person
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={30} name='tag' />
                                FPS
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={40836} name='tag' />
                                Full Controller Support
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={16} name='tag' />
                                Horror
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={7} name='tag' />
                                Multiplayer
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={36} name='tag' />
                                Open-World
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={24} name='tag' />
                                RPG
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={32} name='tag' />
                                Sci-Fi
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={31} name='tag' />
                                Singleplayer
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={118} name='tag' />
                                Story Rich
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={1} name='tag' />
                                Survival
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={149} name='tag' />
                                Third-Person
                            </label>
                        </li>
                    </ul>
                </div>

                <div className='scs-def-tags' onClick={toggleDropdown}>
                    Narrow by genre
                    <ul onClick={toggleSP} className='scs-cdl'>
                        <li>
                            <label>
                                <input type='checkbox' value={45} name='tag' />
                                2D
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={69} name='tag' />
                                Action-Adventure
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={18} name='tag' />
                                Co-op
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={8} name='tag' />
                                First-Person
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={30} name='tag' />
                                FPS
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={40836} name='tag' />
                                Full Controller Support
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={16} name='tag' />
                                Horror
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={7} name='tag' />
                                Multiplayer
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={36} name='tag' />
                                Open-World
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={24} name='tag' />
                                RPG
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={32} name='tag' />
                                Sci-Fi
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={31} name='tag' />
                                Singleplayer
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={118} name='tag' />
                                Story Rich
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={1} name='tag' />
                                Survival
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type='checkbox' value={149} name='tag' />
                                Third-Person
                            </label>
                        </li>
                    </ul>
                </div>

                <select className='srb-ordering' name='ordering' id='ordering-select'>
                    <option className='srb-option' value='added'>Relevance</option>
                    <option className='srb-option' value='released'>Release Date</option>
                    <option className='srb-option' value='name'>Name</option>
                    <option className='srb-option' value='rating'>User Rating</option>
                    <option className='srb-option' value='metacritic'>Metacritic Score</option>
                </select>

                <select className='srb-ordering' name='flip' id='ordering-flip'>
                    <option className='srb-option' value=''>Descending</option>
                    <option className='srb-option' value='-'>Ascending</option>
                </select>
            </form>
        </div>
    )
}

export default ResultBar