import styled from 'styled-components'
import { colors } from '%/styles'

const CloseButton = styled.button`
  background-color: ${colors.blue};
  margin-left: auto;
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 2px;
  }
`

export default CloseButton
