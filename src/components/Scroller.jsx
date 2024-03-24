import React, { useEffect } from 'react'
import '../styles/Scroller.css'

const Scroller = (props) => {
    let content = []
    const maxSlide = props.screenshots.length - 1
    let slideCount = 0
    
    //Adds the trailers to the scroller content
    if (props.movies.length != 0) {
        content.push(props.movies[0])
    }
    
    //Adds the screenshots after the trailer(s) and creates the slides
    content.push(props.screenshots.map((sc) => {
        return (
            <div className='slide'>
                <img key={Math.random()*1000} className='slide-img' src={sc.image} alt={props.name + ' screenshot'} />
            </div>
        )
    }))

    useEffect(() => {
        let slides = document.querySelectorAll('.slide')

        slides.forEach((slide, indx) => {
            slide.style = `transform: translateX(${indx * 100}%)`
        })

        console.log('burgers')
    }, [])

    const nextSlide = () => {
        if (slideCount === maxSlide) { slideCount = 0 }
        else { slideCount++ }

        let slides = document.querySelectorAll('.slide')

        slides.forEach((slide, indx) => {
            slide.style = `transform: translateX(${100 * (indx - slideCount)}%)`
        })
    }

    const prevSlide = () => {
        if (slideCount === 0) { slideCount = maxSlide }
        else { slideCount-- }

        let slides = document.querySelectorAll('.slide')

        slides.forEach((slide, indx) => {
            slide.style = `transform: translateX(${100 * (indx - slideCount)}%)`
        })
    }

    return (
        <>
            <div className='scroller-cont'>
                <div className='carousel'>
                    {content}

                    <div className='scroller-btns'>
                        <button className='btn btn-prev' onClick={prevSlide}> &#x2190; </button>
                        <button className='btn btn-next' onClick={nextSlide}> &#x2192; </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scroller