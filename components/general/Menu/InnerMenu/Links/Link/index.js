import styled from 'styled-components'
import { rem } from 'polished'
import fonts from '%/styles/fonts'

const Link = styled.a`
  display: block;
  color: #ffffff;
  font-size: ${rem(14)};
  font-family: ${fonts.fontFamily};
  font-weight: 400;

  &:hover,
  &:active {
    text-decoration: underline;
    font-weight: 700;
  }
`

export default Link
