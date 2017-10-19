import Section from '~/VDP/Section'
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

const Right = styled.div`
  max-width: 30%;
  margin-left: auto;
`

export default ({trends, miles}) =>
  <Section title='Averages Over Time' summary={`Based on ${trends.length} Similar Vehicles Nearby`}>
    <Right>
      <H2>{miles.toLocaleString('en')} mi</H2>
      <P>234 miles less than market average</P>
    </Right>
    <LineChart dataTrend={trends}/>
  </Section>
