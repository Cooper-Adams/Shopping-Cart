import React from 'react';
import '../styles/Scroller.css'

const Scroller = (props) => {
    let content = []
    
    //Adds the trailers to the scroller content
    if (props.movies.length != 0) {
        content.push(props.movies[0])
    }
    
    //Adds the screenshots after the trailer(s) and creates the slides
    content.push(props.screenshots.map((sc, index) => {
        return (
            <div className='slide'>
                <img key={index} className='slide-img' src={sc.image} alt={props.name + ' screenshot'} />
            </div>
        )
    }))

    return (
        <>
            <div className='scroller-cont'>
                <div className='carousel'>
                    {content}

                    <div className='scroller-btns'>
                        <button className='btn btn-prev'> &#x2190; </button>
                        <button className='btn btn-next'> &#x2192; </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scroller