import styled from 'styled-components'

import { rem } from 'polished'
import { grid } from '%/styles'

const SliderWrapper = styled.div`
  width: calc(100% + ${rem(grid.gutter)});
  margin-left: ${rem(grid.gutter / 2 * -1)};
`

export default SliderWrapper
