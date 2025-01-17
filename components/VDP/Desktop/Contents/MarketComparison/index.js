import Section from '~/VDP/Section'
import Scatter from './Scatter'

export default (props) =>
  <Section title='Market Comparison' summary={`Based on ${props.scatterSimilar.length} similar vehicles in your area`}>
    <Scatter {...props} />
  </Section>
