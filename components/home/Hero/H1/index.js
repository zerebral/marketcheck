import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

const H1 = styled.h1`
  text-align: center;
  color: ${colors.white};
  font-size: ${rem(40)};
  font-weight: 700;
  margin-bottom: ${em(20, 40)};

  ${mediaMax.laptop`
    font-size: ${rem(30)};
  `}

  ${mediaMax.tablet`
    font-size: ${rem(26)};
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  `}
`

export default H1
