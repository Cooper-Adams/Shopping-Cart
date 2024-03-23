import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/ItemCard.css'

const ItemCard = (item) => {
    return (        
        <div className='item-card'>
            <img src={item.game.background_image} alt={item.game.name} />

            <div className='bottom-card'>
                <div className='bc-top'>
                    <Link to={'game/' + item.game.slug} state={{id: item.game.id}}>
                        <h2 className='game-title'>{item.game.name}</h2>
                    </Link>

                    <h4 style={{display: item.game.rating_top === 0 ? 'none' : 'block'}} className={'game-rating ' + (item.game.rating / item.game.rating_top > .7 ? 'good' : item.game.rating / item.game.rating_top > .4 ? 'average' : item.game.rating > 0 ? 'bad' : '')}>{item.game.rating} / {item.game.rating_top}</h4>
                </div>

                <div className='card-rd'>
                    {/* Once library is set, add logic to display a 'You own this game' message if it is in the library already */}
                    <h4 className='default-price'>$69.99</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemCard