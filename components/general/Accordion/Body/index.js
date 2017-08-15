import styled from 'styled-components'
import { colors, grid } from '%/styles'
import { rgba, rem } from 'polished'

const Body = styled.div`
  background-color: ${rgba(colors.blue, 0.09)};
  color: #1f2938;
  padding: ${rem(20)} ${rem(grid.gutter / 2)};
  overflow: hidden;
  height: ${props => props.height ? props.height : 'auto'};
  transition: height 0.3s ease-in;
`

export default Body
