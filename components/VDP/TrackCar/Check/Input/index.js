import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'checkbox',
  id: props => props.id
})`
  display: none;
`

export default Input
