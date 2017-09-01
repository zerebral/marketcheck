import SliderWrapper from './SlideWrapper'
import Slider from 'react-slick'
import Slide from './Slide'
import SliderHOC from '@/HOC/Slider'

const SliderSettings = {
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: '15px',
  autoplay: false,
  autoplaySpeed: 6000
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
