import Section from '~/VDP/Section'
import LineChart from './LineChart.js'
import Similar from './Similar.js'

export default () =>
  <Section title='Model Resale Value' summary='Based upon avg. depreciation rates'>
    <Similar leftText='Similar Models' rightText='Current Value' />
    <Similar rightText='1 Year From Now' />
    <Similar rightText='2 Years From Now' />
    <Similar rightText='5 Years From Now' />
    <LineChart />
  </Section>
