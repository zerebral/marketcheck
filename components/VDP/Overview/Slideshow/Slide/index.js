import styled from 'styled-components'
import { colors } from '%/styles'

const Slide = styled.div`
  background-color: ${colors.softgray};
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 130px;
  margin-top: 6px;
  transition: 0.3s;

  &.slick-active {
    min-height: 140px;
    margin-top: 0;
  }
`

export default Slide
