import { clearFix, rem } from 'polished'
import styled from 'styled-components'

import { grid } from '%/styles'
const padding = rem(grid.gutter / 2)

export default styled.div`
  ${clearFix()}

  position: relative;
  width: 95%;
  margin: 0 auto;
  max-width: ${rem(1170 + grid.gutter)};
  padding: 0 ${padding};
`
