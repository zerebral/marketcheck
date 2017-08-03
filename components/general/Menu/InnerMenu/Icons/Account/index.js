import SVG from './user.svg'
import styled from 'styled-components'

const A = styled.a`
  display: block;
  margin-left: 80px;
`

const User = styled(SVG)`
  width 15px;
`

export default () => <A><User /></A>
