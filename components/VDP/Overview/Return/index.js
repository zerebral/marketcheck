import styled from 'styled-components'
import Prev from './prev.svg'
import { em } from 'polished'

const Return = styled.a`
  display: block;
  width: ${em(33)};
  height: ${em(38)};

  svg {
    width: 100%;
    height: 100%;
  }
`

export default (props) =>
  <Return {...props}><Prev /></Return>
