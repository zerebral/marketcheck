import Slider from 'react-slick'
import Slide from './Slide'
import slides from './slides'
import NextArrow from './NextArrow'
import PreviousArrow from './PreviousArrow'

const SliderSettings = {
  dots: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />
}

export default () =>
  <div>
    <Slider {...SliderSettings}>
      {slides.map((s, index) =>
        <div key={index + s.title}>
          <Slide
            image={s.image}
            subtitle={s.subtitle}
            title={s.title}
            text={s.text}
          />
        </div>
      )}
    </Slider>
  </div>
