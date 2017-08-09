import Slider from 'react-slick'
import Slide from './Slide'
import slides from './slides'
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
    {slides.map((s, index) =>
      <Slide
        key={index + s.title}
        image={s.image}
        subtitle={s.subtitle}
        title={s.title}
        text={s.text}
      />
    )}
  </Slider>
