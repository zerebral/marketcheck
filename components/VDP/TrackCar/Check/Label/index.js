import styled from 'styled-components'
import { em } from 'polished'

const Label = styled.label.attrs({
  htmlFor: props => props.hash
})`
  display: flex;
  align-items: center;
  margin-bottom: ${em(18)};
`

export default Label
