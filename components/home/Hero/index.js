import styled from 'styled-components'
import colors from '%/styles/colors'
import PropTypes from 'prop-types'

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray};
  background-image: ${props => props.image || 'none'};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 750px;
  padding: 60px;
  > * {
    margin: auto;
  }
`

Hero.propTypes = {
  image: PropTypes.string
}

export default Hero
