import Accordion, { FillBody } from '~/general/Accordion'
import styled from 'styled-components'
import LineChart from './LineChart'
import { colors } from '%/styles'

const P = styled.p`
  opacity: 0.56;
`
const H2 = styled.h2`
  font-size: 34px;
  line-height: 41px;
  margin-bottom: 5px;
`

const SummaryWrapper = styled.div`
  padding: 18px 0;
  text-align: center;
  margin-bottom: 40px;
`

const Summary = styled.h4`
  font-size: 12px;
`

export default () =>
  <Accordion title='Averages Over Time' blue >
    <FillBody first >
      <P>Based on 256 Similar Vehicles Nearby</P>
      <H2>145,565 mi</H2>
      <P>234 miles less than market average</P>
      <LineChart />
    </FillBody>
    <FillBody noPadding customBackground={colors.darkblue} customColor={colors.white} >
      <SummaryWrapper>
        <Summary>6 Month Market Averages - Jan Through Jun</Summary>
      </SummaryWrapper>
    </FillBody>
  </Accordion>
