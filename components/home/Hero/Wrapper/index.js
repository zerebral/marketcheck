import styled from 'styled-components'
import colors from '%/styles/colors'
import PropTypes from 'prop-types'
import { hiDPI } from 'polished'

const backgroundImage = props => {
  return props.image
    ? `url(${props.image})`
    : 'none'
}

const retinaImage = props => {
  return props.imageRetina
    ? `url(${props.imageRetina})`
    : props.image
      ? `url(${props.image})`
      : 'none'
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray};
  background-image: ${backgroundImage};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 750px;
  color: ${colors.white};
  padding: 60px;

  ${hiDPI()} {
    background-image: ${retinaImage};
  }


  > * {
    margin: auto;
  }
`

Wrapper.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string
}

export default Wrapper
