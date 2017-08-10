import SVG from './user.svg'
import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'

const A = styled.a`
  display: block;
  margin-left: 80px;

  ${mediaMax.tablet`
    margin-left: 40px;
  `}
`

const User = styled(SVG)`
  width 15px;
`

export default () => <A><User /></A>
