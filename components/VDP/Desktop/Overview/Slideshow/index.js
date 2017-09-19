import SliderWrapper from './SlideWrapper'
import Slider from 'react-slick'
import Slide from './Slide'
import SliderHOC from '@/HOC/Slider'

import { NextArrow, PreviousArrow } from './Components.js'

const SliderSettings = {
  dots: true,
  arrows: true,
  autoplay: false,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />
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
