import React, { useEffect } from 'react'
import '../styles/Scroller.css'

const Scroller = (props) => {
    let btnSlider, cSlides, scSlides, slideRail, smCarousel, videoPlayer

    let carouselContent = []
    let smallCC = []
    let slideCount = 0

    const changeSlide = (e) => {
        // Changes slide index if either the back/next buttons or a small carousel image/video is clicked
        if (e.target.classList.contains('btn-prev')) {
            if (slideCount == 0) { slideCount = scSlides.length - 1 }
            else { slideCount-- }
        } else if (e.target.classList.contains('btn-next')) {
            if (slideCount == (scSlides.length - 1)) { slideCount = 0 }
            else { slideCount++ }
        } else {
            if (e.target.classList.contains('vss')) {
                slideCount = e.target.parentNode.id
            } else {
                slideCount = e.target.id
            }
        }

        //Moves the big slides based on the new index
        if (slideCount <= cSlides.length) {
            cSlides.forEach((slide, indx) => { slide.style = `transform: translateX(${100 * (indx - slideCount)}%)`})
        } else {
            cSlides.forEach((slide, indx) => { slide.style = `transform: translateX(${100 * (indx - cSlides.length)}%)`})
        }

        scSlides.forEach((slide, indx) => {
            if (indx == slideCount) {
                slide.firstChild.classList.add('active')
                videoPlayer.src = slide.firstChild.id
            } else {
                slide.firstChild.classList.remove('active')
            }

            let smcCalc = smCarousel.getBoundingClientRect()

            let slideCalc = slide.getBoundingClientRect()

            let spacing = ((smcCalc.width - 4 - (slideCalc.width * 4)) / 3)

            if ((scSlides.length - 1 - slideCount) >= 3) {
                slide.style = 'transform: translateX(calc(' + (indx - slideCount) + ' * (100% + ' + spacing + 'px)))'
            } else if ((scSlides.length - 1 - slideCount) == 2) {
                slide.style = 'transform: translateX(calc(' + (indx - slideCount + 1) + ' * (100% + ' + spacing + 'px)))'
            } else if ((scSlides.length - 1 - slideCount) == 1) {
                slide.style = 'transform: translateX(calc(' + (indx - slideCount + 2) + ' * (100% + ' + spacing + 'px)))'
            } else {
                slide.style = 'transform: translateX(calc(' + (indx - slideCount + 3) + ' * (100% + ' + spacing + 'px)))'
            }
        })

        if (slideCount > scSlides.length / 2) { 
            btnSlider.style.transform = 'translateX(calc(' + (slideRail.getBoundingClientRect().width / scSlides.length) * slideCount + 'px - .5rem))'
        } else if (slideCount < scSlides.length / 2) { 
            btnSlider.style.transform = 'translateX(calc(' + (slideRail.getBoundingClientRect().width / scSlides.length) * slideCount + 'px + .5rem))'
        } else {
            btnSlider.style.transform = 'translateX(calc(' + (slideRail.getBoundingClientRect().width / scSlides.length) * slideCount + 'px + .25rem))'
        }
        
    }

    carouselContent.push(props.screenshots.map((sc, indx) => {
        return (
            <div key={indx} className='slide' id={indx}>
                <img className='slide-img' draggable={false} src={sc.image} alt={props.name + ' screenshot'} />
            </div>
        )
    }))

    smallCC.push(props.screenshots.map((sc, indx) => {
        return (
            <div key={indx} className='small-slide' onClick={changeSlide}>
                <img className='ss-img' draggable={false} src={sc.image} alt={props.name + ' screenshot'} id={indx}/>
            </div>
        )
    }))
    
    if (props.movies.length != 0) {
        smallCC.push(props.movies.map((movie, indx) => {
            return (
                <div key={indx} className='small-slide vss' id={smallCC[0].length + indx} onClick={changeSlide}>
                   <img className='ss-img vss' draggable={false} src={movie.preview} alt={movie.name} id={movie.data['480']} />
                </div>
            )
        }))
    }

    useEffect(() => {
        btnSlider = document.querySelector('.bs-slider')
        cSlides = document.querySelectorAll('.slide')
        scSlides = document.querySelectorAll('.small-slide')
        slideRail = document.querySelector('.slide-rail')
        smCarousel = document.querySelector('.sm-carousel')
        videoPlayer = document.querySelector('.video-player')

        btnSlider.style.width = 'calc((100%) / ' + (scSlides.length) + ')'
        btnSlider.style.transform = 'translateX(calc(' + (slideRail.getBoundingClientRect().width / scSlides.length) * 0 + 'px + .5rem))'

        cSlides.forEach((slide, indx) => {
            slide.style = `transform: translateX(${indx * 100}%)`
        })

        let smcCalc = smCarousel.getBoundingClientRect()

        scSlides.forEach((slide, indx) => {
            let slideCalc = slide.getBoundingClientRect()

            let spacing = ((smcCalc.width - 4 - (slideCalc.width * 4)) / 3)

            slide.style = 'transform: translateX(calc(' + (indx) + ' * (100% + ' + spacing + 'px)))'

            if (indx == 0) { slide.firstChild.classList.add('active') }
        })
    })

    return (
        <>
            <div className='scroller-cont'>
                <div className='carousel'>
                    <div className='video-div' style={{display: props.movies.length === 0 ? 'none' : 'flex'}}>
                        <video src='' className='video-player' controls></video>
                    </div>
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