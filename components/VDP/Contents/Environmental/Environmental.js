import { Accordion } from '~/general'
import styled from 'styled-components'
import Circle from './Circle.js'

const Summary = styled.p`
  opacity: 0.56;
  margin-bottom: 20px !important;
`

export default () =>
  <Accordion title='Environmental Friendliness' open >
    <Summary>
      Based upon EPA guidelines for measuring pollutants
    </Summary>

    <Circle />
  </Accordion>
