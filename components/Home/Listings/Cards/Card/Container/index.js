import styled from 'styled-components'
import { em } from 'polished'
import { percentage } from '%/styles/mixins'

const CardContainer = styled.div`
  padding: 0 ${em(9)};
  max-width: ${percentage(1, 3)};
  flex-basis: ${percentage(1, 3)};
`
export default CardContainer
