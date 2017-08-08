import styled from 'styled-components'
import { align } from '%/styles/mixins'
import SVG from './caret.svg'

const Caret = styled(SVG)`
  fill: currentColor;
  width: 9px;
  ${align('vertical')}
  right: 20px;
`

export default Caret
