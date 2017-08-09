import styled from 'styled-components'
import { rem, clearFix } from 'polished'
import { grid } from '%/styles'

import { mediaMin, percentage } from '%/styles/mixins'

const padding = rem(grid.gutter / 2)

const laptopStyles = mediaMin.laptop`
  width: ${percentage(3.5, 10)};
`

const LargeColumn = styled.div`
  ${clearFix()}
  position: relative;
  padding-left: ${padding};
  padding-right: ${padding};
  float: left;
  width: 100%;

  ${laptopStyles}
`

export default LargeColumn
