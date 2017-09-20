import Section from '~/VDP/Section'
import Averages from './Averages.js'
import Similar from './Similar.js'

export default () =>
  <Section title='The Competition' summary='Similar cars currently for sale'>
    <Averages />
    <Similar />
  </Section>
