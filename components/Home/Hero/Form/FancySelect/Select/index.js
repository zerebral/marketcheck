import styled from 'styled-components'
import { rem } from 'polished'

const Select = styled.select`
  appearance: none;
  position: relative;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  border-radius: 0;
  font: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  padding: ${rem(20)};
  &:active, &:focus {
    outline: 1px dotted;
  }
  &::-ms-expand {
    display: none;
  }
`

export default Select
