import { Link, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Header from '../components/Header'
import React from 'react'
import '../styles/Achievements.css'

const Achievements = () => {
    const { name } = useParams()

    const { data: achievements, error, isLoading, } = useQuery(['getAchievements', `/netlify/functions/getAchievements?name=${name}`], async () => await(await fetch(`/.netlify/functions/getAchievements?name=` + name)).json(), { refetchOnWindowFocus: false})

    return (
        <>
            <Header />

            <div className='full-achievements'>
                {isLoading && ( <div className='lds-dual-ring'></div> )}
                
                {!isLoading && (<>
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