import '../styles/ResultBar.css'
import { QueryContext } from '../contexts/QueryContext'
import React, { useContext } from 'react'

const ResultBar = (props) => {
    const { additions, setAdditions, setPage, setPlatforms, setSearch, setSort, setQueryGenre, setQueryTag } = useContext(QueryContext)

    const changeGenres = (e) => {
        setQueryGenre(e.target.name)
        
        let inputs = document.querySelectorAll('.genre')
        
        inputs.forEach((input) => {
            if (input.name == e.target.name) {
                input.checked = true
            } else {
                input.checked = false
            }
        })
    }

    const changePlatforms = (e) => {
        setPlatforms(e.target.name)
        
        let inputs = document.querySelectorAll('.platform')
        
        inputs.forEach((input) => {
            if (input.name == e.target.name) {
                input.checked = true
            } else {
                input.checked = false
            }
        })
    }

    const changeTags = (e) => {
        setQueryTag(e.target.name)
        
        let inputs = document.querySelectorAll('.querytag')
        
        inputs.forEach((input) => {
            if (input.name == e.target.name) {
                input.checked = true
            } else {
                input.checked = false
            }
        })
    }

    const clearQuery = () => {
        setAdditions(false)
        setPage(1)
        setPlatforms('')
        setQueryGenre('')
        setQueryTag('')
        setSearch('')
        setSort('added')

        let inputs = document.querySelectorAll('.checkall')
        
        inputs.forEach((input) => { input.checked = false })
    }

    const toggleAdditions = (e) => { setAdditions(e.target.checked) }

    return (
        <div className='shop-resultsbar'>
            <div className='srb-top'>
                <h3 className='srb-top-number'>{(props.number == null ? 'Loading results...' : props.number + ' results')}</h3>
                <h3 className='clear-btn' onClick={clearQuery}>Clear</h3>
            </div>

            <label className='check-container exclude' htmlFor='exclude'>Exclude Add-Ons
                <input type='checkbox' id='exclude' name='exclude' onChange={toggleAdditions} value={additions}/>
                <span className='checkmark'></span>
            </label>

            <form className='srb-platforms' action=''>
                <h3 className='srb-title'>Platforms</h3>

                <label className='check-container' htmlFor='pc'>PC
                    <input className='platform checkall' type='checkbox' id='pc' name='4' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='playstation'>PlayStation
                    <input className='platform checkall' type='checkbox' id='playstation' name='187,18,16' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='xbox'>Xbox
                    <input className='platform checkall' type='checkbox' id='xbox' name='186,1,14' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='switch'>Nintendo Switch
                    <input className='platform checkall' type='checkbox' id='switch' name='7' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='ios'>iOS
                    <input className='platform checkall' type='checkbox' id='ios' name='3' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='android'>Android
                    <input className='platform checkall' type='checkbox' id='android' name='21' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>
            </form>

            <form className='srb-genres' action=''>
                <h3 className='srb-title'>Genres</h3>

                <label className='check-container' htmlFor='action'>Action
                    <input className='genre checkall' type='checkbox' id='action' name='4' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='adventure'>Adventure
                    <input className='genre checkall' type='checkbox' id='adventure' name='3' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='arcade'>Arcade
                    <input className='genre checkall' type='checkbox' id='arcade' name='11' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='casual'>Casual
                    <input className='genre checkall' type='checkbox' id='casual' name='40' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='family'>Family
                    <input className='genre checkall' type='checkbox' id='family' name='19' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='fighting'>Fighting
                    <input className='genre checkall' type='checkbox' id='fighting' name='6' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='indie'>Indie
                    <input className='genre checkall' type='checkbox' id='indie' name='51' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='platformer'>Platformer
                    <input className='genre checkall' type='checkbox' id='platformer' name='83' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='puzzle'>Puzzle
                    <input className='genre checkall' type='checkbox' id='puzzle' name='7' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='racing'>Racing
                    <input className='genre checkall' type='checkbox' id='racing' name='1' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='rpg'>RPG
                    <input className='genre checkall' type='checkbox' id='rpg' name='5' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='shooter'>Shooter
                    <input className='genre checkall' type='checkbox' id='shooter' name='2' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='simulation'>Simulation
                    <input className='genre checkall' type='checkbox' id='simulation' name='14' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='sports'>Sports
                    <input className='genre checkall' type='checkbox' id='sports' name='15' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='strategy'>Strategy
                    <input className='genre checkall' type='checkbox' id='strategy' name='10' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>
            </form>

            <form className='srb-tags' action=''>
                <h3 className='srb-title'>Tags</h3>

                <label className='check-container' htmlFor='2d'>2D
                    <input className='querytag checkall' type='checkbox' id='2d' name='45' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='actionadventure'>Action-Adventure
                    <input className='querytag checkall' type='checkbox' id='actionadventure' name='69' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='coop'>Co-Op
                    <input className='querytag checkall' type='checkbox' id='coop' name='18' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='firstperson'>First-Person
                    <input className='querytag checkall' type='checkbox' id='firstperson' name='8' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='fullcontrollersupport'>Full Controller Support
                    <input className='querytag checkall' type='checkbox' id='fullcontrollersupport' name='40836' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='horror'>Horror
                    <input className='querytag checkall' type='checkbox' id='horror' name='16' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='multiplayer'>Multiplayer
                    <input className='querytag checkall' type='checkbox' id='multiplayer' name='7' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='openworld'>Open-World
                    <input className='querytag checkall' type='checkbox' id='openworld' name='36' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='scifi'>Sci-Fi
                    <input className='querytag checkall' type='checkbox' id='scifi' name='32' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='singleplayer'>Singleplayer
                    <input className='querytag checkall' type='checkbox' id='singleplayer' name='31' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='storyrich'>Story Rich
                    <input className='querytag checkall' type='checkbox' id='storyrich' name='118' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='survival'>Survival
                    <input className='querytag checkall' type='checkbox' id='survival' name='1' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='thirdperson'>Third-Person
                    <input className='querytag checkall' type='checkbox' id='thirdperson' name='149' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>
            </form>
        </div>
    )
}

export default ResultBar