import Section from '~/VDP/Section'
import CircleGraphs from './CircleGraphs'
import Summary from './Summary.js'

export default () =>
  <Section title='Time on Market' summary='Listed for sale for 189 days' >
    <CircleGraphs />
    <Summary />
  </Section>
