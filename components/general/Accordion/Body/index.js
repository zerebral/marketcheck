import styled from 'styled-components'
import { colors, grid } from '%/styles'
import { rgba, rem } from 'polished'

const Body = styled.div`
  background-color: ${rgba(colors.blue, 0.09)};
  color: #1f2938;
  padding: ${rem(20)} ${rem(grid.gutter / 2)};
`

export default Body
