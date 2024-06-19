import '../styles/ResultBar.css'
import { QueryContext } from '../contexts/QueryContext'
import React, { useContext } from 'react'

const ResultBar = (props) => {
    const { additions, order, sort, queryTag, queryGenre, setAdditions, setOrder, setPage, setSearch, setSort, setQueryGenre, setQueryTag } = useContext(QueryContext)

    const clearQuery = (e) => {
        setAdditions(false)
        setOrder('ordering=-')
        setPage(1)
        setQueryGenre('')
        setQueryTag('')
        setSearch('')
        setSort('added')
    }

    const updateQuery = (e) => {
        if (e.target.id == 'exclude') {
            setAdditions(e.target.checked)
        } else if (e.target.id == 'tag') {
            setQueryTag(e.target.selectedOptions[0].value)
        } else if (e.target.id == 'genre') {
            setQueryGenre(e.target.selectedOptions[0].value)
        } else if (e.target.id == 'sort') {
            setSort(e.target.selectedOptions[0].value)
        } else if (e.target.id == 'order') {
            setOrder(e.target.selectedOptions[0].value)
        }
    }

    return (
        <div className='shop-resultsbar'>
            <div className='srb-top'>
                <h3 className='srb-top-number'>{(props.number == null ? 'Loading results...' : props.number + ' results')}</h3>
                <h3 className='clear-btn' onClick={clearQuery}>Clear</h3>
            </div>

            <label className='check-container exclude' htmlFor='exclude'>Exclude Add-Ons
                <input type='checkbox' id='exclude' name='exclude' onChange={updateQuery} value={additions}/>
                <span className='checkmark'></span>
            </label>

            <form className='srb-genres' action=''>
                <h3 className='srb-title'>Genres</h3>

                <label className='check-container' htmlFor='action'>Action
                    <input type='checkbox' name='action' value={4}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='adventure'>Adventure
                    <input type='checkbox' name='adventure' value={3}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='arcade'>Arcade
                    <input type='checkbox' name='arcade' value={11}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='casual'>Casual
                    <input type='checkbox' name='casual' value={40}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='family'>Family
                    <input type='checkbox' name='family' value={19}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='fighting'>Fighting
                    <input type='checkbox' name='fighting' value={6}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='indie'>Indie
                    <input type='checkbox' name='indie' value={51}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='platformer'>Platformer
                    <input type='checkbox' name='platformer' value={83}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='puzzle'>Puzzle
                    <input type='checkbox' name='puzzle' value={7}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='racing'>Racing
                    <input type='checkbox' name='racing' value={1}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='rpg'>RPG
                    <input type='checkbox' name='rpg' value={5}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='shooter'>Shooter
                    <input type='checkbox' name='shooter' value={2}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='simulation'>Simulation
                    <input type='checkbox' name='simulation' value={14}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='sports'>Sports
                    <input type='checkbox' name='sports' value={15}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='strategy'>Strategy
                    <input type='checkbox' name='strategy' value={10}/>
                    <span className='checkmark'></span>
                </label>
            </form>

            <form className='srb-tags' action=''>
                <h3 className='srb-title'>Tags</h3>

                <label className='check-container' htmlFor='2d'>2D
                    <input type='checkbox' name='2d' value={45}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='actionadventure'>Action-Adventure
                    <input type='checkbox' name='actionadventure' value={69}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='coop'>Co-Op
                    <input type='checkbox' name='coop' value={18}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='firstperson'>First-Person
                    <input type='checkbox' name='firstperson' value={8}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='fullcontrollersupport'>Full Controller Support
                    <input type='checkbox' name='fullcontrollersupport' value={40836}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='horror'>Horror
                    <input type='checkbox' name='horror' value={16}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='multiplayer'>Multiplayer
                    <input type='checkbox' name='multiplayer' value={7}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='openworld'>Open-World
                    <input type='checkbox' name='openworld' value={36}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='rpg'>RPG
                    <input type='checkbox' name='rpg' value={24}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='scifi'>Sci-Fi
                    <input type='checkbox' name='scifi' value={32}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='singleplayer'>Singleplayer
                    <input type='checkbox' name='singleplayer' value={31}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='storyrich'>Story Rich
                    <input type='checkbox' name='storyrich' value={118}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='survival'>Survival
                    <input type='checkbox' name='survival' value={1}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='thirdperson'>Third-Person
                    <input type='checkbox' name='thirdperson' value={149}/>
                    <span className='checkmark'></span>
                </label>
            </form>
        </div>
    )
}

export default ResultBar