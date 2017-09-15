import styled from 'styled-components'
import { em } from 'polished'
import { colors } from '%/styles'

const Wrapper = styled.div`
  background-color: ${colors.white};
  border-bottom: 2px solid ${colors.bordergray};
  padding: ${em(15)} 0;
`

export default Wrapper
