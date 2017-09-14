import { Accordion } from '~/general'
import styled from 'styled-components'
import { number } from '%/format'
import data from './data.json'
import Car from './Car'

const Summary = styled.p`
  opacity: 0.56;
  margin-bottom: 30px !important;
`

const cars = data.listings

export default () =>
  <Accordion title='Similar Local Cars' open >
    <Summary>{number(data.num_found)} Similar cars in Your Local Area</Summary>
    {cars.map(car =>
      <Car
        key={car.id}
        name={car.dealer.name}
        city={car.dealer.city}
        state={car.dealer.state}
        distance={24}
        rating={4.2}
        reviews={24}
        website={car.vdp_url}
      />
    )}
  </Accordion>
