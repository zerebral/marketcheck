import { Accordion } from '~/general'
import styled from 'styled-components'
import { number } from '%/format'
import data from './seedData.js'

const Summary = styled.p`
  opacity: 0.56;
  margin-bottom: 30px !important;
`

export default () =>
  <Accordion title='Similar Local Cars' open >
    <Summary>{number(data.num_found)} Similar cars in Your Local Area</Summary>
  </Accordion>
