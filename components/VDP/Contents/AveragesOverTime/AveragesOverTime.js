import { Accordion } from '~/general'
import styled from 'styled-components'
import LineChart from './LineChart'

const P = styled.p`
  opacity: 0.56;
`
const H2 = styled.h2`
  font-size: 34px;
  line-height: 41px;
  margin-bottom: 5px;
`

export default () =>
  <Accordion title='Averages Over Time' open >
    <P>Based on 256 Similar Vehicles Nearby</P>
    <H2>145,565 mi</H2>
    <P>234 miles less than market average</P>
    <LineChart />
  </Accordion>
