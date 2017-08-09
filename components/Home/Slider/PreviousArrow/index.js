import styled from 'styled-components'
import Previous from './previous.svg'

import { em } from 'polished'

const PreviousArrow = styled.button`
  width: ${em(25)};
`

export default (props) => <PreviousArrow {...props} ><Previous /></PreviousArrow>
