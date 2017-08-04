import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'

const H1 = styled.h1`
  text-align: center;
  color: ${colors.white};
  font-size: ${rem(40)};
  font-weight: 700;
  margin-bottom: ${em(20, 40)};
`

export default H1
