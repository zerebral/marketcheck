import { Accordion } from '~/general'
import styled from 'styled-components'
import Averages from './Averages.js'
import Similar from './Similar.js'

const Summary = styled.p`
  opacity: 0.54;
  margin-bottom: 25px !important;
`

export default () =>
  <Accordion title='The Competition' open >
    <Summary>
      Similar cars currently for sale
    </Summary>
    <Averages />
    <Similar />
  </Accordion>
