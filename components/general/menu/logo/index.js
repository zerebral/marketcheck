import styled from 'styled-components'
import Logo from './logo.svg'

const A = styled.a`
  display: block;
  margin-right: auto;
  max-width: 145px;
`

export default () => (
  <A>
    <Logo />
  </A>
)
