import { clearFix, rem } from 'polished'
import styled from 'styled-components'

import { grid } from '%/styles'
const padding = rem(grid.gutter / 2)

const OutContainer = styled.div`
  ${clearFix()}
  position: relative;
  margin: 0 auto;
  left: -125px;
  max-width: ${rem(1170 + 250 + grid.gutter)};
  padding: 0 ${padding};
`

export default OutContainer
 