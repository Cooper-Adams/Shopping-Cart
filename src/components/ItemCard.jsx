import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/ItemCard.css'

const ItemCard = (item) => {
    let date = new Date(item.game.released)
    let formattedDate
    let todaysDate = new Date()

    //Switches Date to MM/DD/YYYY from YYYY/MM/DD
    if (!isNaN(date.getTime())) {
        formattedDate = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    }

    return (
        <Link to={'game/' + item.game.slug} state={{game: item.game}}>
            <div className='item-card'>
                <img src={item.game.background_image} alt={item.game.name} />

                <div className='bottom-card'>
                    <div className="bc-top">
                        <h2 className='game-title'>{item.game.name}</h2>

                        <h4 style={{display: item.game.rating_top === 0 ? 'none' : 'block'}} className={'game-rating ' + (item.game.rating / item.game.rating_top > .7 ? 'good' : item.game.rating / item.game.rating_top > .4 ? 'average' : item.game.rating > 0 ? 'bad' : '')}>{item.game.rating} / {item.game.rating_top}</h4>
                    </div>

                    <div className='card-rd'>
                        <h4 className='release-date'>{todaysDate < date ? 'Releasing on' : 'Released'}: {formattedDate}</h4>

                        {/* Once library is set, add logic to display a 'You own this game' message if it is in the library already */}
                        <h4 className='default-price'>$69.99</h4>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard