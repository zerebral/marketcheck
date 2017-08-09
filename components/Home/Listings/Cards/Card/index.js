import styled from 'styled-components'
import { em, rgba } from 'polished'
import { percentage } from '%/styles/mixins'
import { colors } from '%/styles'

const CardContainer = styled.div`
  padding: 0 ${em(9)};
  max-width: ${percentage(1, 3)};
  flex-basis: ${percentage(1, 3)};
`

const Card = styled.a`
  display: block;
  background: ${colors.white};
  box-shadow: 2px 2px 5px ${rgba('#000', 0.15)};
  text-align: center;
`

export default () =>
  <CardContainer>
    <Card>Soon to be a card</Card>
  </CardContainer>
