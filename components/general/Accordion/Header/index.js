import styled from 'styled-components'
import { colors } from '%/styles'
import { rem } from 'polished'

const conditionalPadding = props =>
  props.open
    ? `${rem(15)} ${rem(30)}`
    : `${rem(15)}`

const Header = styled.div`
  background-color: ${props => props.open ? colors.blue : '#333'};
  color: ${colors.white};
  padding: ${conditionalPadding};
  display: flex;
  align-items: center;
  transition: 0.3s;
`

export default Header
