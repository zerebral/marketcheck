import styled from 'styled-components'
import { rem } from 'polished'
import { grid } from '%/styles'

const gutter = rem(grid.gutter / 2)

const conditionalAlign = props =>
  props.align
    ? `align-items: ${props.align};`
    : null

const conditionalJustify = props =>
  props.justify
    ? `justify-content: ${props.justify};`
    : null

const FlexRow = styled.div`
  display: flex;
  margin-left: -${gutter};
  margin-right: -${gutter};
  ${conditionalAlign}
  ${conditionalJustify}
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
`

export default FlexRow
