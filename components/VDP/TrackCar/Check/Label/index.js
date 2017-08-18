import styled from 'styled-components'
import { em } from 'polished'

const Label = styled.label.attrs({
  for: props => props.id
})`
  display: flex;
  align-items: center;
  margin-bottom: ${em(18)};
`

export default Label
