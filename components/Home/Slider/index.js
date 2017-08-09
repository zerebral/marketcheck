import Slider from 'react-slick'

const SliderSettings = {
  dots: true,
  arrows: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default () =>
  <Slider {...SliderSettings}>
    <div>Hello world</div>
    <div>Bye world</div>
  </Slider>
