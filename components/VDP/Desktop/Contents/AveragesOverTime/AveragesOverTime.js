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

export default ({trends, testing}) =>
  <Section title='Averages Over Time' summary='Based on 256 Similar Vehicles Nearby'>
    <Right>
      <H2>145,565 mi</H2>
      <P>234 miles less than market average</P>
      <p>{testing}</p>
    </Right>
    <LineChart dataTrend={trends}/>
  </Section>
