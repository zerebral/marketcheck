import styled from 'styled-components'
import { rem } from 'polished'
import { mediaMin } from '%/styles/mixins'

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
  padding: ${rem(22)} ${rem(15)};
  &::-ms-expand {
    display: none;
  }

  ${mediaMin.desktop`
    padding: ${rem(20)};
  `}
`

export default Select
