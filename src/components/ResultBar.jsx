import '../styles/ResultBar.css'
import { QueryContext } from '../contexts/QueryContext'
import React, { useContext } from 'react'

const ResultBar = (props) => {
    const { additions, platforms, queryGenre, queryTag, setAdditions, setPage, setPlatforms, setSearch, setSearchBar, setSort, setQueryGenre, setQueryTag } = useContext(QueryContext)

    const changeGenres = (e) => {
        let inputs = document.querySelectorAll('.genre')
        
        if (queryGenre == e.target.name) {
            setQueryGenre('')
        } else {
            inputs.forEach((input) => {
                if (input.name == e.target.name) {
                    input.checked = true
                } else {
                    input.checked = false
                }
            })

            setQueryGenre(e.target.name)
        }
    }

    const changePlatforms = (e) => {
        let inputs = document.querySelectorAll('.platform')

        if (platforms == e.target.name) {
            setPlatforms('')
        } else {
            inputs.forEach((input) => {
                if (input.name == e.target.name) {
                    input.checked = true
                } else {
                    input.checked = false
                }
            })

            setPlatforms(e.target.name)
        } 
    }

    const changeTags = (e) => {
        let inputs = document.querySelectorAll('.querytag')
        if (queryTag == e.target.name) {
            setQueryTag('')
        } else {
            inputs.forEach((input) => {
                if (input.name == e.target.name) {
                    input.checked = true
                } else {
                    input.checked = false
                }
            })

            setQueryTag(e.target.name)
        }
    }

    const clearQuery = () => {
        setAdditions(false)
        setPage(1)
        setPlatforms('')
        setQueryGenre('')
        setQueryTag('')
        setSearch('')
        setSearchBar('')
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
                <input type='checkbox' id='exclude' name='exclude' onChange={toggleAdditions} checked={additions}/>
            </label>

            <form className='srb-platforms' action=''>
                <h3 className='srb-title'>Platforms</h3>

                <label className='check-container' htmlFor='pc'>PC
                    <input className='platform checkall' type='checkbox' id='pc' name='4' onChange={changePlatforms} checked={platforms == '4' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='playstation'>PlayStation
                    <input className='platform checkall' type='checkbox' id='playstation' name='187,18,16' onChange={changePlatforms} checked={platforms == '187,18,16' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='xbox'>Xbox
                    <input className='platform checkall' type='checkbox' id='xbox' name='186,1,14' onChange={changePlatforms} checked={platforms == '186,1,14' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='switch'>Nintendo Switch
                    <input className='platform checkall' type='checkbox' id='switch' name='7' onChange={changePlatforms} checked={platforms == '7' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='ios'>iOS
                    <input className='platform checkall' type='checkbox' id='ios' name='3' onChange={changePlatforms} checked={platforms == '3' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='android'>Android
                    <input className='platform checkall' type='checkbox' id='android' name='21' onChange={changePlatforms} checked={platforms == '21' ? true : false}/>

                </label>
            </form>

            <form className='srb-genres' action=''>
                <h3 className='srb-title'>Genres</h3>

                <label className='check-container' htmlFor='action'>Action
                    <input className='genre checkall' type='checkbox' id='action' name='4' onChange={changeGenres} checked={queryGenre == '4' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='adventure'>Adventure
                    <input className='genre checkall' type='checkbox' id='adventure' name='3' onChange={changeGenres} checked={queryGenre == '3' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='arcade'>Arcade
                    <input className='genre checkall' type='checkbox' id='arcade' name='11' onChange={changeGenres} checked={queryGenre == '11' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='casual'>Casual
                    <input className='genre checkall' type='checkbox' id='casual' name='40' onChange={changeGenres} checked={queryGenre == '40' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='family'>Family
                    <input className='genre checkall' type='checkbox' id='family' name='19' onChange={changeGenres} checked={queryGenre == '19' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='fighting'>Fighting
                    <input className='genre checkall' type='checkbox' id='fighting' name='6' onChange={changeGenres} checked={queryGenre == '6' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='indie'>Indie
                    <input className='genre checkall' type='checkbox' id='indie' name='51' onChange={changeGenres} checked={queryGenre == '51' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='platformer'>Platformer
                    <input className='genre checkall' type='checkbox' id='platformer' name='83' onChange={changeGenres} checked={queryGenre == '83' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='puzzle'>Puzzle
                    <input className='genre checkall' type='checkbox' id='puzzle' name='7' onChange={changeGenres} checked={queryGenre == '7' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='racing'>Racing
                    <input className='genre checkall' type='checkbox' id='racing' name='1' onChange={changeGenres} checked={queryGenre == '1' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='rpg'>RPG
                    <input className='genre checkall' type='checkbox' id='rpg' name='5' onChange={changeGenres} checked={queryGenre == '5' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='shooter'>Shooter
                    <input className='genre checkall' type='checkbox' id='shooter' name='2' onChange={changeGenres} checked={queryGenre == '2' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='simulation'>Simulation
                    <input className='genre checkall' type='checkbox' id='simulation' name='14' onChange={changeGenres} checked={queryGenre == '14' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='sports'>Sports
                    <input className='genre checkall' type='checkbox' id='sports' name='15' onChange={changeGenres} checked={queryGenre == '15' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='strategy'>Strategy
                    <input className='genre checkall' type='checkbox' id='strategy' name='10' onChange={changeGenres} checked={queryGenre == '10' ? true : false}/>

                </label>
            </form>

            <form className='srb-tags' action=''>
                <h3 className='srb-title'>Tags</h3>

                <label className='check-container' htmlFor='2d'>2D
                    <input className='querytag checkall' type='checkbox' id='2d' name='45' onChange={changeTags} checked={queryTag == '45' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='actionadventure'>Action-Adventure
                    <input className='querytag checkall' type='checkbox' id='actionadventure' name='69' onChange={changeTags} checked={queryTag == '69' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='coop'>Co-Op
                    <input className='querytag checkall' type='checkbox' id='coop' name='18' onChange={changeTags} checked={queryTag == '18' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='firstperson'>First-Person
                    <input className='querytag checkall' type='checkbox' id='firstperson' name='8' onChange={changeTags} checked={queryTag == '8' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='fullcontrollersupport'>Full Controller Support
                    <input className='querytag checkall' type='checkbox' id='fullcontrollersupport' name='40836' onChange={changeTags} checked={queryTag == '40836' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='horror'>Horror
                    <input className='querytag checkall' type='checkbox' id='horror' name='16' onChange={changeTags} checked={queryTag == '16' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='multiplayer'>Multiplayer
                    <input className='querytag checkall' type='checkbox' id='multiplayer' name='7' onChange={changeTags} checked={queryTag == '7' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='openworld'>Open-World
                    <input className='querytag checkall' type='checkbox' id='openworld' name='36' onChange={changeTags} checked={queryTag == '36' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='scifi'>Sci-Fi
                    <input className='querytag checkall' type='checkbox' id='scifi' name='32' onChange={changeTags} checked={queryTag == '32' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='singleplayer'>Singleplayer
                    <input className='querytag checkall' type='checkbox' id='singleplayer' name='31' onChange={changeTags} checked={queryTag == '31' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='storyrich'>Story Rich
                    <input className='querytag checkall' type='checkbox' id='storyrich' name='118' onChange={changeTags} checked={queryTag == '118' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='survival'>Survival
                    <input className='querytag checkall' type='checkbox' id='survival' name='1' onChange={changeTags} checked={queryTag == '1' ? true : false}/>

                </label>

                <label className='check-container' htmlFor='thirdperson'>Third-Person
                    <input className='querytag checkall' type='checkbox' id='thirdperson' name='149' onChange={changeTags} checked={queryTag == '149' ? true : false}/>

                </label>
            </form>
        </div>
    )
}

export default ResultBar