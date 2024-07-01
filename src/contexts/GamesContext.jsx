import { QueryContext } from '../contexts/QueryContext'
import getGames from '../functions/getGames'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const GamesContext = createContext([])

export const GCProvider = (props) => {
    const { query } = useContext(QueryContext)
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true)
                setGames(await getGames(query))
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        
        fetchGames()
    }, [query])

    const gcValue = {
        games,
        loading
    }

    return (
        <GamesContext.Provider value={gcValue}>
            {props.children}
        </GamesContext.Provider>
    )
}