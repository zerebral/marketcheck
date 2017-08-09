import { clearFix, rem } from 'polished'
import styled from 'styled-components'

import { grid } from '%/styles'
const padding = rem(grid.gutter / 2)

export default styled.div`
  max-width: ${rem(1170 + grid.gutter)};
  position: relative;
  margin-right: auto;
  margin-left: auto;
  padding-left: ${padding};
  padding-right: ${padding};
  ${clearFix()}
`
