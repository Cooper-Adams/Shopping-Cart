import React, { useEffect } from 'react'
import '../styles/Scroller.css'

const Scroller = (props) => {
    let carouselContent = []
    const maxSlide = props.screenshots.length - 1
    let smallCC = []
    let slideCount = 0

    //Adds the screenshots after the trailer(s) and creates the slides
    carouselContent.push(props.screenshots.map((sc, indx) => {
        return (
            <div key={indx} className='slide'>
                <img className='slide-img' src={sc.image} alt={props.name + ' screenshot'} />
            </div>
        )
    }))

    //Adds the screenshots after the trailer(s) and creates the slides
    smallCC.push(props.screenshots.map((sc, indx) => {
        return (
            <div key={indx} className='small-slide'>
                <img className='ss-img' src={sc.image} alt={props.name + ' screenshot'} />
            </div>
        )
    }))
    
    //Adds the trailers to the scroller content
    if (props.movies.length != 0) {
        smallCC.push(props.movies.map((movie, indx) => {
            return (
                <div key={indx} className='small-slide'>
                    <video className='ss-img' controls src={movie.data['480']}></video>
                </div>
            )
        }))
    }

    useEffect(() => {
        let btnSlider = document.querySelector('.bs-slider')
        let cSlides = document.querySelectorAll('.slide')
        let scSlides = document.querySelectorAll('.small-slide')
        let smCarousel = document.querySelector('.sm-carousel')

        btnSlider.style.width = 'calc((100%) / ' + (maxSlide + 1) + ')'

        cSlides.forEach((slide, indx) => {
            slide.style = `transform: translateX(${indx * 100}%)`
        })

        let smcCalc = smCarousel.getBoundingClientRect()

        scSlides.forEach((slide, indx) => {
            let slideCalc = slide.getBoundingClientRect()

            let spacing = ((smcCalc.width - (slideCalc.width * 4)) / 3)
            
            slide.style = 'transform: translateX(calc(' + (indx) + ' * (100% + ' + spacing + 'px)))'

            if (indx == 0) { slide.classList.add('active') }
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
                    {carouselContent}
                </div>
                <div className='sm-carousel'>
                    {smallCC}
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