import { Accordion } from '~/general'
import styled from 'styled-components'
import LineCharts from './LineCharts.js'

const Summary = styled.p`
  opacity: 0.56;
  margin-bottom: 50px !important;
  line-height: 2 !important;
`

export default () =>
  <Accordion title='Model Popularity' open >
    <Summary>
      Based upon Days-on-Market ( DOM )
    </Summary>
    <LineCharts />
  </Accordion>
