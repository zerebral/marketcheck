import styled from 'styled-components'
import { rem, clearFix } from 'polished'
import { grid } from '%/styles'

const gutter = rem(grid.gutter / 2)

const Row = styled.div`
  margin-left: -${gutter};
  margin-right: -${gutter};

  ${clearFix()}
`

export default Row
