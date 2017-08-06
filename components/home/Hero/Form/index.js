import styled from 'styled-components'
import { colors } from '%/styles'

const Form = styled.form`
  position: relative;
  background: ${colors.white};
  border-radius: 4px;
`
export default ({onSubmit}) => <Form onSubmit={onSubmit} />
