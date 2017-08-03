import Wrapper from './Wrapper'
import PropTypes from 'prop-types'

const Hero = ({ image, imageRetina }) => (
  <Wrapper
    image={imageRetina}
    imageRetina={imageRetina}
  />
)

Hero.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string
}

export default Hero
