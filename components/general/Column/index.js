import styled from 'styled-components'
import { rem, clearFix } from 'polished'
import { mediaMin } from '%/styles/mixins'
import { grid, breakpoints } from '%/styles'

const { gutter } = grid

const padding = rem(gutter / 2)

const responsiveStyling = Object.keys(breakpoints).map(breakpoint => props => {
  return props[breakpoint]
    ? `${mediaMin[breakpoint]`
    width: ${props[breakpoint]}%;
    `}`
    : ''
})

const Column = styled.div`
  padding-left: ${padding};
  padding-right: ${padding};
  float: left;
  width: 100%;
  ${clearFix()}

  ${responsiveStyling}
`

export default Column
