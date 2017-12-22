import Section from '~/VDP/Section'
import Scatter from './Scatter'

export default (props) =>
  <Section id='marketContainer' title='Market Comparison' summary={`Based on ${props.scatterSimilar.length} similar vehicles in your area`}>
      {console.log(props)}
    <Scatter {...props} />
  </Section>
