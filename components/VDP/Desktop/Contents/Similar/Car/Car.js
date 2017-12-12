import Seller from './Seller'
import {
  Car,
  NewBadge,
  Features,
  Name,
  Title,
  Details,
  PriceRow,
  Price,
  Deal,
  Average,
  PicWrapper,
  Info
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

import { ellipsis, currency, number } from '%/format'

export default ({
  dealer,
  distance,
  rating,
  reviews,
  website,
  name,
  price,
  picture,
  transmission,
  miles,
  cityMiles,
  highwayMiles,
  vdpUrl
}) =>
  <Car>
    <PicWrapper>
      {picture
            ? <img src={picture} />
            : <Soon />
        }
    </PicWrapper>

    <Info>
      <NewBadge>New</NewBadge>

      <Title>
        <Name>{ellipsis(name)}</Name>
        <Certified />
      </Title>

      <Details>{transmission}, {number(miles)} mi, {parseInt(cityMiles)}/{parseInt(highwayMiles)} MPG*</Details>

      <PriceRow>
        <Price>{currency(price)}</Price>
        <Deal>Great Deal!</Deal>
        <Like />
        <Share />
      </PriceRow>

      <Average>{currency(874)} less than market average</Average>

      {false ?
      <Features>
        <Bluetooth />
        <Cam />
        <Wheels />
        <Geo />
        <Air />
        <Brake />
        <Keyless />
      </Features> :
      null
      }

    </Info>
    { reviews && rating &&
      <Seller
        name={dealer.name}
        city={dealer.city}
        state={dealer.state}
        distance={24}
        rating={rating.overall_rating}
        reviews={reviews.overall_reviews}
        website={website}
        vdpUrl={vdpUrl}
      />
    }
  </Car>
