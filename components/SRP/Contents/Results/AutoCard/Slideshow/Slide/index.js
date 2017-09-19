import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import { stdBackground, mediaMin } from '%/styles/mixins'

const Slide = styled.div`
  ${stdBackground()}
  background-color: ${colors.softgray};
  background-image: url(${props => props.image});
  min-height: 190px;
  height: 190px;
  transition: 0.3s;
  margin-top: 15px;

  ${mediaMax.desktop`
    min-height: 183px;
    height: 183px;
  `}

  ${mediaMax.largeTablet`
    min-height: 220px;
    height: 220px;
  `}

  .slick-active & {
    min-height: 190px;
    height: 190px;
    margin-top: 0;

    ${mediaMax.desktop`
      min-height: 183px;
      height: 183px;
    `}

    ${mediaMax.largeTablet`
      min-height: 250px;
      height: 250px;
    `}
  }
`
export default Slide
