import styled from 'styled-components'
import { rem, clearFix } from 'polished'
import { mediaMin } from '%/styles/mixins'
import { grid, breakpoints } from '%/styles'

const { gutter } = grid

const padding = rem(gutter / 2)

// ['desktop', 'laptop'...]
const bpKeysArray = Object.keys(breakpoints)

const responsiveStyling = props => {
  const usableBreaks = bpKeysArray.filter(bp => props[bp] !== undefined)
  return usableBreaks.map(bp => mediaMin[bp]`
    width: ${props[bp]}%;
  `)
}

const Column = styled.div`
  padding-left: ${padding};
  padding-right: ${padding};
  float: left;
  width: 100%;
  ${clearFix()}

  ${responsiveStyling}
`

export default Column
