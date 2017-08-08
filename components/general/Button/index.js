import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'

const determineColor = props =>
  props.primary
    ? colors.green
    : colors.black

const Button = styled.a`
  background-color: ${determineColor};
  font-size: ${rem(14)};
  font-weight: 700;
  line-height: ${17 / 14};
  color: ${colors.white};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${em(14, 14)} ${em(27, 14)};
  border-radius: ${rem(4)};
`

export default Button