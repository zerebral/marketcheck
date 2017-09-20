import Section from '~/VDP/Section'
import { number } from '%/format'
import data from './data.json'
import Car from './Car'

const cars = data.listings

const String = () => {
  return number(data.num_found) + ' Vehicles Within ' + number(100) + ' Miles'
}

export default () =>
  <Section title='Similar Local Cars' summary={String()} center >
    {cars.map(car =>
      <Car
        key={car.id}
        dealer={car.dealer}
        distance={24}
        rating={4.2}
        reviews={24}
        website={car.vdp_url}
        name={car.heading}
        price={car.price}
        picture={car.media.photo_links[0]}
      />
    )}
  </Section>
