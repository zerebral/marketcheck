import styled from 'styled-components'
import { colors } from '%/styles'
import { em } from 'polished'

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: ${em(20)} 0 ${em(15)};
`

export default Wrapper
