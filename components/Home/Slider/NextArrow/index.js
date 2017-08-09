import styled from 'styled-components'
import Next from './next.svg'

import { em } from 'polished'

const NextArrow = styled.button`
  width: ${em(25)};
`

export default (props) => <NextArrow {...props} ><Next /></NextArrow>
