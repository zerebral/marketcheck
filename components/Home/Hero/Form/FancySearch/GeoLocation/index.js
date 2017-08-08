import styled from 'styled-components'
import SVG from './pin.svg'
import { rem } from 'polished'
import { colors } from '%/styles'

const Geolocation = styled(SVG)`
  width: ${rem(8)};
  fill: ${colors.gray};
  margin-right: ${rem(15)};
`

export default Geolocation
