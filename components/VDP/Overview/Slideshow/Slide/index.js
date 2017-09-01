import styled from 'styled-components'
import { colors } from '%/styles'
import { stdBackground } from '%/styles/mixins'

const Slide = styled.div`
  ${stdBackground()}
  background-color: ${colors.softgray};
  background-image: url(${props => props.image});
  min-height: 130px;
  height: 130px;
  margin-top: 6px;
  transition: 0.3s;

  .slick-active & {
    min-height: 140px;
    height: 140px;
    margin-top: 0;
  }
`
export default Slide
