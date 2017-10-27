import Section from '~/VDP/Section'
import { number } from '%/format'
import data from './data.json'
import Car from './Car'

//const cars = data.listings

const String = (amount) => {
  return number(amount) + ' Vehicles Within ' + number(100) + ' Miles'
}

const Reviews = (dealerReview) => {
  dealerReview.map(review => review.overall_reviews)
}

export default (props) =>
  <Section title='Similar Local Cars' summary={String(props.numFound)} center className={props.className}>
  {props.cars && props.cars.length > 1 &&
    props.cars.map(car =>
      <Car
        key={car.id}
        dealer={car.dealer}
        distance={24}
        rating={4.2}
        reviews={24}
        website={`//${car.source}`}
        name={car.heading}
        price={car.price}
        picture={car.media.photo_links[0]}
        transmission={car.build.transmission}
        miles={car.miles}
        cityMiles={car.build.city_miles}
        highwayMiles={car.build.highway_miles}
        vdpUrl={car.vdp_url}
        reviews={Reviews(props.similarCarsDealerReviews)}
      />
    )
  }
  </Section>
