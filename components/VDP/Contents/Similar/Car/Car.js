import Seller from './Seller'

export default ({
  dealer,
  distance,
  rating,
  reviews,
  website
}) =>
  <Seller
    name={dealer.name}
    city={dealer.city}
    state={dealer.state}
    distance={24}
    rating={4.2}
    reviews={24}
    website={website}
  />
