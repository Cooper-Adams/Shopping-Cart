import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import React from 'react'

const Game = (props) => {
    //Gets the game data passed from the link
    const location = useLocation()
    const { game } = location.state

    return (
        <>
            <Header />

            <div className='game-cont'>

            </div>
        </>
    )
}

export default Game