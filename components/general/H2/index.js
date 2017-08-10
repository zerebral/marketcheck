import styled from 'styled-components'
import { rem, em } from 'polished'
import { mediaMax } from '%/styles/mixins'

const H2 = styled.h1`
  font-size: ${rem(40)};
  font-weight: 700;
  line-height: ${48 / 40};
  margin-bottom: ${em(20, 40)};

  ${mediaMax.desktop`font-size: ${rem(36)};`}
  ${mediaMax.laptop`font-size: ${rem(30)};`}
  ${mediaMax.tablet`font-size: ${rem(26)};`}
  ${mediaMax.phablet`font-size: ${rem(20)};`}
`

export default H2
