import { Link, useParams } from 'react-router-dom'
import getGames from '../functions/getGames'
import Header from '../components/Header'
import React, { useEffect, useState } from 'react'
import '../styles/Achievements.css'

const Achievements = () => {
    const [achievements, setAchievements] = useState([])
    const [loading, setLoading] = useState(true)

    const { name } = useParams()

    useEffect(() => {
        async function getAchievements() {
            try {
                let blankAch = []
                let tempAch = await getGames('https://api.rawg.io/api/games/' + name + '/achievements?page_size=40&key=hellorobots')
    
                while (true) {
                    tempAch.results.map((ach) => {
                        blankAch.push(ach)
                    })
            
                    if (tempAch.next != null) {
                        tempAch = await getGames(tempAch.next)
                    } else {
                        break
                    }
                }

                setAchievements(blankAch)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        getAchievements()
    }, [])

    return (
        <>
            <Header />

            <div className='full-achievements'>
                {loading && ( <div className='lds-dual-ring'></div> )}
                
                {!loading && (<>
                    <div className='ach-top'>
                        <h2>Showing {achievements.length} Achievements</h2>
                        <Link to={'/game/' + name} className='return-link'><h2>Return</h2></Link>
                    </div>
                    
                    {achievements.toReversed().map((ach, indx) => {
                        return(
                            <div className='full-ach-long' key={indx} style={{background: 'linear-gradient(to right, var(--dark-bg) ' + (ach.percent) + '%, var(--darkest-bg) ' + (ach.percent) +'%)'}}>
                                <img className='side-achievement' src={ach.image} alt={ach.description}/>
                                <div className='fal-tdp'>
                                    <div className='fal-td'>
                                        <h3 className='achievement-title'>{ach.name}</h3>
                                        <h4 className='achievement-desc'>{ach.description}</h4>
                                    </div>
                                    <span className='achievement-percent'>{ (ach.percent) + '% of players have this achievement'}</span>
                                </div>
                            </div>
                        )
                    })}
                </>)}
            </div>
        </>
    )
}

export default Achievements

