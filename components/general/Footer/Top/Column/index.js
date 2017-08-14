import styled from 'styled-components'
import { em } from 'polished'
import { grid } from '%/styles'
import { mediaMin } from '%/styles/mixins'

const padding = em(grid.gutter / 2)

const phabletStyles = mediaMin.phablet`
  max-width: 25%;
  flex-basis: 25%;
`

const laptopStyles = mediaMin.laptop`
  display: block;
  max-width: 20%;
  flex-basis: 20%;
  margin-bottom: 0;
`

const Column = styled.div`
  display: ${props => props.social ? 'none' : 'block'};
  position: relative;
  padding-left: ${padding};
  padding-right: ${padding};
  margin-bottom: ${em(20)};
  max-width: 50%;
  flex-basis: 50%;
  ${phabletStyles}
  ${laptopStyles}
`
export default Column
