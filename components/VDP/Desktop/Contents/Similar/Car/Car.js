import Seller from './Seller'
import {
  Car,
  Wrapper,
  NewBadge,
  Features,
  Name,
  Title,
  Details,
  PriceRow,
  Price,
  Deal,
  Average,
  PicWrapper
} from './Components.js'

import {
  Bluetooth,
  Cam,
  Wheels,
  Geo,
  Air,
  Brake,
  Keyless,
  Certified,
  Like,
  Share,
  Soon
} from './Icons'

import { ellipsis, currency } from '%/format'

export default ({
  dealer,
  distance,
  rating,
  reviews,
  website,
  name,
  price,
  picture
}) =>
  <Wrapper>
    <Car>
      <NewBadge>New</NewBadge>

      <Title>
        <Name>{ellipsis(name)}</Name>
        <Certified />
      </Title>

      <Details>6-Speed Automatic, 6487 mi, 20/24 MPG*</Details>

      <PriceRow>
        <Price>{currency(price)}</Price>
        <Deal>Great Deal!</Deal>
        <Like />
        <Share />
      </PriceRow>

      <Average>{currency(874)} less than market average</Average>

      <Features>
        <Bluetooth />
        <Cam />
        <Wheels />
        <Geo />
        <Air />
        <Brake />
        <Keyless />
      </Features>

      <PicWrapper>
        {picture
            ? <img src={picture} />
            : <Soon />
        }
      </PicWrapper>
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
