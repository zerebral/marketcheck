import { Accordion } from '~/general'
import Scatter from './Scatter'

export default () =>
  <Accordion title='Market Comparison'>
    <p>Based on 356 similar vehicles in your area</p>
    <Scatter />
  </Accordion>
