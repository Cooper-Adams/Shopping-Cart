import { CartContext } from '../contexts/CartContext'
import { LibraryContext } from '../contexts/LibraryContext'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Header from '../components/Header'
import Parser from 'html-react-parser'
import React, { useContext } from 'react'
import Scroller from '../components/Scroller'
import '../styles/Game.css'

const Game = () => {
    const { cart, setCart } = useContext(CartContext)
    const { library } = useContext(LibraryContext)

    const { name } = useParams()

    window.scrollTo(0, 0)

    let date, formattedDate, minimum, recommended
    let todaysDate = new Date()

    const { data: achievements, error: achievementsError, isLoading: isAchLoading, } = useQuery(['getAchievements', name], async () => await(await fetch(`/.netlify/functions/getAchievements?name=${name}&page_size=3`)).json(), { refetchOnWindowFocus: false})
    const { data: game, error: gameError, isLoading: isGameLoading, } = useQuery(['getGameData', name], async () => await(await fetch(`/.netlify/functions/getGameData?name=${name}`)).json(), { refetchOnWindowFocus: false})
    const { data: movies, error: moviesError, isLoading: isMovieLoading, } = useQuery(['getGameMovies', name], async () => await(await fetch(`/.netlify/functions/getGameMovies?name=${name}`)).json(), { refetchOnWindowFocus: false})
    const { data: screenshots, error: screenError, isLoading: isScreenLoading, } = useQuery(['getGameScreens', name], async () => await(await fetch(`/.netlify/functions/getGameScreens?name=${name}`)).json(), { refetchOnWindowFocus: false})

    if (!isGameLoading) {
        if (game.released) {
            date = new Date(game.released.replace(/-/g, '\/'))
            formattedDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
        } else {
            formattedDate = 'Coming Soon'
        }
    }

    if (!isAchLoading && !isGameLoading && !isMovieLoading && !isScreenLoading) {
        for (let i = 0; i < game.platforms.length; ++i) {
            if (game.platforms[i].platform.name === 'PC') {
                minimum = game.platforms[i].requirements['minimum']
                recommended = game.platforms[i].requirements['recommended']
            }
        }
    }

    const addToCart = () => { if ((cart.findIndex((potentialGame) => potentialGame.slug === name)) == -1) { setCart([...cart, game]) } }

    return (
        <>
            <Header />
            
            <div className='game-cont'>
                <div className='game-content'>
                    {(isAchLoading || isGameLoading || isMovieLoading || isScreenLoading) && ( <div className='lds-dual-ring'></div> )}

                    {(!isAchLoading && !isGameLoading && !isMovieLoading && !isScreenLoading) && (<>
                        <h1 className='game-name'>{game.name}</h1>

                        <div className='gc-inner'>
                            <div className='gc-left'>
                                <Scroller
                                    movies={movies.results}
                                    name={game.name}
                                    screenshots={screenshots.results}
                                />

                                <div className='lower-left'>
                                    <div className='atc'>
                                        <h3 className='atc-bm'>{(library.findIndex((potentialGame) => potentialGame.slug === name) == -1) ? 'Buy ' + game.name : 'You already own ' + game.name}</h3>

                                        {(library.findIndex((potentialGame) => potentialGame.slug === name) == -1) && <>
                                            <div className='atc-button-cont'>
                                                <p className='atc-price'>$69.99</p>
                                                <button className='atc-btn' onClick={addToCart}>Add to Cart</button>
                                            </div>
                                        </>}
                                    </div>

                                    <div className='abt-cont'>
                                        <h4 className='abt-header'>ABOUT THIS GAME</h4>
                                        <div className='abt-text'>{Parser(game.description)}</div>
                                    </div>

                                    <div className='abt-sysreq' style={{display: minimum == null ? 'none' : 'block'}}>
                                        <h4 className='abt-header'>SYSTEM REQUIREMENTS</h4>
                                        <div className='sysreq-text'>
                                            <div className='sysreq'>{minimum == null ? '' : Parser(minimum)}</div>
                                            <div className='sysreq'>{recommended == null ? '' : Parser(recommended)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='gc-right'>
                                <img className='game-image' src={game.background_image} alt='' />

                                <div className='gi-spacing' style={{display: game.rating_top === 0 ? 'none' : 'flex'}}>
                                    <h4 className='gis-left'>USER RATINGS: </h4>
                                    <h4 className={'game-rating ' + (game.rating / game.rating_top > .7 ? 'good' : game.rating / game.rating_top > .4 ? 'average' : game.rating > 0 ? 'bad' : '')}>{game.rating} / {game.rating_top}</h4>
                                </div>

                                <div className='gi-spacing'>
                                    <h4 className='gis-left'>{todaysDate < date ? 'RELEASE DATE' : 'RELEASED'}:</h4>
                                    <h4>{formattedDate}</h4>
                                </div>

                                <div className='gi-spacing dev'>
                                    <h4 className='gis-left'>DEVELOPER:</h4>
                                    {game.developers.length === 0 ? <h4>Unknown</h4> : game.developers.map((dev, indx) => {
                                        return (<h4 className='gi-dp' key={indx}>{dev.name + (indx != (game.developers.length - 1) ? ',' : '')}</h4>)
                                    })}
                                </div>

                                <div className='gi-spacing pub'>
                                    <h4 className='gis-left'>PUBLISHER:</h4>
                                    {game.publishers.length === 0 ? <h4>Unknown</h4> : game.publishers.map((pub, indx) => {
                                        return(<h4 className='gi-dp' key={indx}>{pub.name + (indx != (game.publishers.length - 1) ? ',' : '')}</h4>)
                                    })}
                                </div>

                                <div className='gc-right-tags'>
                                    <div className='lr-tags' style={{display: game.tags.length > 0 ? 'flex' : 'none'}}>
                                        <h3 className='tag-header'>Tags for this product:</h3>

                                        <div className='tags'>
                                            {game.tags.length === 0 ? <h4>None</h4> : game.tags.map((tag, indx) => {
                                                return <span key={indx} className='lr-tag'>{tag.name}</span>
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className='gc-right-achievements' style={{display: achievements.length > 0 ? 'flex' : 'none'}}>
                                    <div className='lr-tags'>
                                        <h3 className='tag-header'>Includes {game.parent_achievements_count} Achievements:</h3>

                                        <div className='side-achievements'>
                                            {achievements.map((ach, indx) => {
                                                return (<img key={indx} className='side-achievement' src={ach.image}></img>)
                                            })}
                                            
                                            <Link to={'/game/' + name + '/achievements'} style={{textDecoration: 'none'}}>
                                                <div className='ach-popup'>
                                                    <h4 className='ach-message'>View All {achievements.count}</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='gc-right-metacritic' style={{display: game.metacritic != null ? 'flex' : 'none'}}>
                                    <div className='gcra-cont'>
                                        <div className={'mc-square '  + (game.metacritic >= 65 ? 'high' : game.metacritic >= 30 ? 'medium' : game.metacritic >= 0 ? 'low' : '') }>
                                            <h2 className='mc-score'>{game.metacritic}</h2>
                                        </div>

                                        <a href={game.metacritic_url} target='_blank'>
                                            <img className='mc-logo' src='/metacritic.png' alt='Metacritic Logo'/>
                                        </a>
                                    </div>
                                </div>

                                <div className='gc-right-si'>
                                    <div className='side-information'>
                                        <div className='si-spacing'>
                                            <p>TITLE: </p>
                                            <h4>{game.name}</h4>
                                        </div>

                                        <div className='si-spacing'>
                                            <p>GENRE: </p>
                                            <h4>{game.genres[0].name}</h4>
                                        </div>

                                        <div className='si-spacing'>
                                            <p>DEVELOPER: </p>
                                            {game.developers.map((dev, indx) => {
                                                return (<h4 key={indx}>{dev.name + (indx != (game.developers.length - 1) ? ',' : '')}</h4>)
                                            })}
                                        </div>

                                        <div className='si-spacing'>
                                            <p>PUBLISHER: </p>
                                            {game.publishers.map((pub, indx) => {
                                                return (<h4 key={indx}>{pub.name + (indx != (game.publishers.length - 1) ? ',' : '')}</h4>)
                                            })}
                                        </div>

                                        <div className='si-spacing'>
                                            <p>RELEASE DATE: </p>
                                            <h4>{formattedDate}</h4>
                                        </div>

                                        <div className='si-spacing'>
                                            <p>PLATFORMS: </p>
                                            {game.parent_platforms.map((plat, indx) => {
                                                return (<h4 key={indx}>{plat.platform.name + (indx != (game.parent_platforms.length - 1) ? ',' : '')}</h4>)
                                            })}
                                        </div>

                                        <div className='si-spacing' style={{display: game.esrb_rating != null ? 'flex' : 'none'}}>
                                            <p>ESRB RATING: </p>
                                            <h4>{game.esrb_rating != null ? game.esrb_rating.name : 'none'}</h4>
                                        </div>

                                        <div className='si-spacing'>
                                            <a href={game.website} target='_blank'><p>VISIT THE WEBSITE</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}
                </div>
            </div>
        </>
    )
}

export default Game