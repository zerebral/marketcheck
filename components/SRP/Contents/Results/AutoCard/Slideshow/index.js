import SliderWrapper from './SlideWrapper'
import Slider from 'react-slick'
import Slide from './Slide'
import SliderHOC from '@/HOC/Slider'

import { breakpoints } from '%/styles'

import { NextArrow, PreviousArrow } from './Components.js'

const SliderSettings = {
  slidesToShow: 1,
  dots: true,
  slide: 'slick-slide > div',
  arrows: true,
  autoplay: false,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />,
  responsive: [
    {
      breakpoint: breakpoints.laptop,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '30px'
      }
    },
    {
      breakpoint: breakpoints.largeTablet,
      settings: {
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '30px'
      }
    }
  ]
}

const OverviewSlider = ({slides}) =>
  <SliderWrapper>
    <Slider {...SliderSettings}>
      {slides.map((slide, index) =>
        <div key={index} >
          <Slide image={slide} />
        </div>
      )}
    </Slider>
  </SliderWrapper>

export default SliderHOC(OverviewSlider)
