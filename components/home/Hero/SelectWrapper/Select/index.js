import styled from 'styled-components'

const Select = styled.select`
  appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  border-radius: 0;
  font: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  &::-ms-expand {
    display: none;
  }
`

export default Select
