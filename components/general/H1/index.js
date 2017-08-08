import styled from 'styled-components'
import { rem, em } from 'polished'

const H1 = styled.h1`
  font-size: ${rem(48)};
  font-weight: 700;
  line-height: ${58 / 48};
  margin-bottom: ${em(20, 48)};
`

export default H1
