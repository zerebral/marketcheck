import { Accordion } from '~/general'
import styled from 'styled-components'
import Rating from './Rating'
import Seller from './Seller'

const Summary = styled.p`
  opacity: 0.56;
  margin-bottom: 45px !important;
`

export default () =>
  <Accordion title='Safety Ratings'>
    <Summary>Define Where Data is Coming From</Summary>
    <Rating stars={4} name='Overall' />
    <Rating stars={2} name='Roll Over' />
    <Rating stars={3.2} name='Driver Side' />
    <Rating stars={4.3} name='Driver Front' />
    <Rating stars={5} name='Passenger Front' />

    <Seller
      name='Drew International Sales'
      location='Atlanta, GA'
      distance={24}
      rating={4.2}
      reviews={24}
      website='#'
    />
  </Accordion>