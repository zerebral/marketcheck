import styled from 'styled-components'
import { em } from 'polished'
import { colors } from '%/styles'

const ResetBtn = styled.div`
  display: inline-block;
`

const Text = styled.a`
  color: ${colors.blue};
  display: inline-block;
  font-size: ${em(13)};
  font-weight: 300;
  vertical-align: middle;

  &:hover {
    text-decoration: underline;
  }
`

export default ({
  name,
  link
}) =>
  <ResetBtn>
    <Text href={link}>{ name }</Text>
  </ResetBtn>
