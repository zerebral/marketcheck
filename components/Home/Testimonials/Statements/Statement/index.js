import styled from 'styled-components'
import { rem } from 'polished'

import Rating from './Rating'

const Statement = styled.div`
  padding: 0 ${rem(15)};
  flex-basis: ${1 / 3 * 100}%;
`

export default () =>
  <Statement>
    <Rating />
  </Statement>
