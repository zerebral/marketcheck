import styled from 'styled-components'

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
  ${conditionalAlign}
  ${conditionalJustify}
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
`

export default FlexRow
