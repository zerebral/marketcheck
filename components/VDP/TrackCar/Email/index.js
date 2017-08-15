import styled from 'styled-components'
import { rem, em } from 'polished'
import { placeholder } from '%/styles/mixins'
import { colors } from '%/styles'

const Input = styled.input`
  font-size: ${rem(14)};
  line-height: 1;
  padding: ${em(16, 14)};
  color: #232a35;
  text-align: center;
  background: ${colors.white};
  border-radius: 8px;
  ${placeholder`
    font-size: ${rem(14)};
    line-height: 1;
    color: #232a35;
  `}
`

export default Input
