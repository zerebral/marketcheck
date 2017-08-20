import styled from 'styled-components'
import { em } from 'polished'

const Label = styled.label.attrs({
  htmlFor: props => props.hash
})`
  display: flex;
  align-items: center;
  margin-bottom: ${em(18)};

  & > svg {
    fill: currentColor;
    width: 1em;
    height: 1em;

    &:nth-child(1) {
      display: block;
      input[type='checkbox']:checked + & {
        display: none;
      }
    }

    &:nth-child(2) {
      display: none;
      input[type='checkbox']:checked + & {
        display: block;
      }
    }
  }
`

export default Label
