import styled from 'styled-components'
// Helpers for styling
import { rem } from 'polished'
import { grid } from '%/styles'
// Helper for the magic
import responsiveStyling from './responsiveStyling'

// Styling helpers
const padding = rem(grid.gutter / 2)

// The component _per se_
const Column = styled.div`
  position: relative;
  padding-left: ${padding};
  padding-right: ${padding};
  max-width: 100%;
  flex-basis: 100%;
  ${responsiveStyling}
`

export default Column
