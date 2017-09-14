import Seller from './Seller'

import {
  Car,
  Wrapper,
  NewBadge,
  Features,
  Name,
  Title,
  Details
} from './Components.js'

import {
  Bluetooth,
  Cam,
  Wheels,
  Geo,
  Air,
  Brake,
  Keyless,
  Certified
} from './Icons'

import { ellipsis } from '%/format'

export default ({
  dealer,
  distance,
  rating,
  reviews,
  website,
  name
}) =>
  <Wrapper>
    <Car>
      <NewBadge>New</NewBadge>

      <Title>
        <Name>{ellipsis(name)}</Name>
        <Certified />
      </Title>

      <Details>6-Speed Automatic, 6487 mi, 20/24 MPG*</Details>

      <Features>
        <Bluetooth />
        <Cam />
        <Wheels />
        <Geo />
        <Air />
        <Brake />
        <Keyless />
      </Features>
    </Car>
    <Seller
      name={dealer.name}
      city={dealer.city}
      state={dealer.state}
      distance={24}
      rating={4.2}
      reviews={24}
      website={website}
    />
  </Wrapper>
