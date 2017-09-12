import { Accordion } from '~/general'
import styled from 'styled-components'
import LineChart from './LineChart.js'

const Summary = styled.p`
  opacity: 0.54;
  margin-bottom: 60px !important;
`

const ChartLabel = styled.span`
  display: block;
  font-size: 12px;
  line-height: 14px;
  opacity: 0.54;
  margin-bottom: 5px;
`

export default () =>
  <Accordion title='Model Resale Value' open >
    <Summary>
      Based upon Days-on-Market ( DOM )
    </Summary>

    <ChartLabel>
      Price Depreciation Over time period
    </ChartLabel>
    <LineChart />
  </Accordion>
