import styled from 'styled-components'
import { rem } from 'polished'
import { percentage } from '%/styles/mixins'

const Network = styled.a`
  display: block;
  text-align: center;
  margin-bottom: ${rem(50)};
  max-width: ${percentage(1, 3)};
  flex-basis: ${percentage(1, 3)};

  & > svg {
    height: ${rem(20)};
    width: ${rem(20)};
    margin: 0 auto;
    fill: currentColor;
  }
`

export default Network
