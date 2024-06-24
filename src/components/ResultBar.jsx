import '../styles/ResultBar.css'
import { QueryContext } from '../contexts/QueryContext'
import React, { useContext } from 'react'

const ResultBar = (props) => {
    const { additions, platforms, queryTag, queryGenre, setAdditions, setPage, setPlatforms, setSearch, setSort, setQueryGenre, setQueryTag } = useContext(QueryContext)

    const changeGenres = (e) => {
        if (e.target.checked) {
            setQueryGenre(...queryGenre, e.target.name)
        } else {
            setQueryGenre(Array(queryGenre).filter((d) => d !== e.target.name))
        }
    }

    const changePlatforms = (e) => {
        if (e.target.checked) {
            setPlatforms(...platforms, e.target.name)
        } else {
            setPlatforms(Array(platforms).filter((d) => d !== e.target.name))
        }
    }

    const changeTags = (e) => {
        if (e.target.checked) {
            setQueryTag(...queryTag, e.target.name)
        } else {
            setQueryTag(Array(queryTag).filter((d) => d !== e.target.name))
        }
    }

    const clearQuery = () => {
        setAdditions(false)
        setPage(1)
        setQueryGenre('')
        setQueryTag('')
        setSearch('')
        setSort('added')
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
                    <input type='checkbox' id='pc' name='4' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='playstation5'>PlayStation 5
                    <input type='checkbox' id='playstation5' name='187' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='playstation4'>PlayStation 4
                    <input type='checkbox' id='playstation4' name='18' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='playstation3'>PlayStation 3
                    <input type='checkbox' id='playstation3' name='16' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='xboxx'>Xbox Series X
                    <input type='checkbox' id='xboxx' name='186' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='xbox1'>Xbox One
                    <input type='checkbox' id='xbox1' name='1' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='xbox360'>Xbox 360
                    <input type='checkbox' id='xbox360' name='14' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='switch'>Nintendo Switch
                    <input type='checkbox' id='switch' name='7' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='ios'>iOS
                    <input type='checkbox' id='ios' name='3' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='android'>Android
                    <input type='checkbox' id='android' name='21' onChange={changePlatforms}/>
                    <span className='checkmark'></span>
                </label>
            </form>

            <form className='srb-genres' action=''>
                <h3 className='srb-title'>Genres</h3>

                <label className='check-container' htmlFor='action'>Action
                    <input type='checkbox' id='action' name='4' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='adventure'>Adventure
                    <input type='checkbox' id='adventure' name='3' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='arcade'>Arcade
                    <input type='checkbox' id='arcade' name='11' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='casual'>Casual
                    <input type='checkbox' id='casual' name='40' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='family'>Family
                    <input type='checkbox' id='family' name='19' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='fighting'>Fighting
                    <input type='checkbox' id='fighting' name='6' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='indie'>Indie
                    <input type='checkbox' id='indie' name='51' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='platformer'>Platformer
                    <input type='checkbox' id='platformer' name='83' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='puzzle'>Puzzle
                    <input type='checkbox' id='puzzle' name='7' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='racing'>Racing
                    <input type='checkbox' id='racing' name='1' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='rpg'>RPG
                    <input type='checkbox' id='rpg' name='5' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='shooter'>Shooter
                    <input type='checkbox' id='shooter' name='2' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='simulation'>Simulation
                    <input type='checkbox' id='simulation' name='14' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='sports'>Sports
                    <input type='checkbox' id='sports' name='15' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='strategy'>Strategy
                    <input type='checkbox' id='strategy' name='10' onChange={changeGenres}/>
                    <span className='checkmark'></span>
                </label>
            </form>

            <form className='srb-tags' action=''>
                <h3 className='srb-title'>Tags</h3>

                <label className='check-container' htmlFor='2d'>2D
                    <input type='checkbox' id='2d' name='45' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='actionadventure'>Action-Adventure
                    <input type='checkbox' id='actionadventure' name='69' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='coop'>Co-Op
                    <input type='checkbox' id='coop' name='18' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='firstperson'>First-Person
                    <input type='checkbox' id='firstperson' name='8' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='fullcontrollersupport'>Full Controller Support
                    <input type='checkbox' id='fullcontrollersupport' name='40836' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='horror'>Horror
                    <input type='checkbox' id='horror' name='16' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='multiplayer'>Multiplayer
                    <input type='checkbox' id='multiplayer' name='7' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='openworld'>Open-World
                    <input type='checkbox' id='openworld' name='36' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='scifi'>Sci-Fi
                    <input type='checkbox' id='scifi' name='32' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='singleplayer'>Singleplayer
                    <input type='checkbox' id='singleplayer' name='31' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='storyrich'>Story Rich
                    <input type='checkbox' id='storyrich' name='118' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='survival'>Survival
                    <input type='checkbox' id='survival' name='1' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>

                <label className='check-container' htmlFor='thirdperson'>Third-Person
                    <input type='checkbox' id='thirdperson' name='149' onChange={changeTags}/>
                    <span className='checkmark'></span>
                </label>
            </form>
        </div>
    )
}

export default ResultBar