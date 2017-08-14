import styled from 'styled-components'
import { colors } from '%/styles'
import { rem } from 'polished'

const Slide = styled.div`
  background-color: ${colors.softgray};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: ${rem(130)};
  margin-top: ${rem(6)};
  transition: 0.3s;

  &.slick-active {
    min-height: ${rem(140)};
    margin-top: 0;
  }
`

export default Slide
