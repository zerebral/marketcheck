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
  color: inherit;
  display: flex;
  align-items: center;
  padding: ${rem(20)};
  &::-ms-expand {
    display: none;
  }
`

export default Select
