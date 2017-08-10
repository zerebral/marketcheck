import SVG from './logo.svg'
import styled from 'styled-components'

import { mediaMax } from '%/styles/mixins'

export default styled(SVG)`
  width: 145px;
  ${mediaMax.laptop`
    width: 100px;
  `}
`
