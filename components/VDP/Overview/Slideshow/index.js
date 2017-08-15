import SliderWrapper from './SlideWrapper'
import Slider from 'react-slick'
import Slide from './Slide'

const SliderSettings = {
  dots: false,
  arrows: false,
  centerMode: true,
  centerPadding: '15px',
  autoplay: false,
  autoplaySpeed: 6000
}

export default ({slides}) =>
  <SliderWrapper>
    <Slider {...SliderSettings}>
      {slides.map((slide, index) =>
        <Slide
          key={index + slide}
          image={slide}
        />
      )}
    </Slider>
  </SliderWrapper>