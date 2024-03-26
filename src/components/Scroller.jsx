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
    content.push(props.screenshots.map((sc, indx) => {
        return (
            <div key={indx} className='slide'>
                <img className='slide-img' src={sc.image} alt={props.name + ' screenshot'} />
            </div>
        )
    }))

    useEffect(() => {
        let slider = document.querySelector('.bs-slider')
        let slides = document.querySelectorAll('.slide')

        slider.style.width = 'calc((100%) / ' + (maxSlide + 1) + ')'

        slides.forEach((slide, indx) => {
            slide.style = `transform: translateX(${indx * 100}%)`
        })
    }, [])

    const changeSlide = (e) => {
        if (e.target.classList.contains('btn-prev')) {
            if (slideCount === 0) { slideCount = maxSlide }
            else { slideCount-- }
        } else {
            if (slideCount === maxSlide) { slideCount = 0 }
            else { slideCount++ }
        }

        let slider = document.querySelector('.bs-slider')
        let slides = document.querySelectorAll('.slide')

        slides.forEach((slide, indx) => {
            slide.style = `transform: translateX(${100 * (indx - slideCount)}%)`
        })

        slider.style.transform = 'translateX(calc(' + slider.clientWidth * slideCount + (slideCount != 0 ? 'px - 2rem))' : 'px)')
    }

    return (
        <>
            <div className='scroller-cont'>
                <div className='carousel'>
                    {content}
                </div>
                <div className='scroller-btns'>
                    <div name='prev' className='btn-prev' onClick={changeSlide}></div>
                    <div className='slide-rail'>
                        <div className='bs-slider'></div>
                    </div>
                    <div name='next' className='btn-next' onClick={changeSlide}></div>
                </div>
            </div>
        </>
    )
}

export default Scroller