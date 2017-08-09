import Slider from 'react-slick'

import NextArrow from './NextArrow'
import PreviousArrow from './PreviousArrow'

const SliderSettings = {
  dots: true,
  arrows: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />
}

export default () =>
  <Slider {...SliderSettings}>
    <div>Hello world</div>
    <div>Bye world</div>
  </Slider>
