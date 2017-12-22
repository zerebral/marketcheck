import Seller from './Seller'
import Slideshow from './Slideshow'
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

import { cutString, ellipsis, currency, number } from '%/format'

export default ({
  props,
  dealer,
  distance,
  rating,
  reviews,
  website,
  name,
  price,
  pictures,
  transmission,
  miles,
  cityMiles,
  highwayMiles,
  vdpUrl
}) =>
  <Car>
    <Slideshow data={props} />
    {/*<PicWrapper>*/}
      {/*{picture*/}
            {/*? <img src={picture} />*/}
            {/*: <Soon />*/}
        {/*}*/}
    {/*</PicWrapper>*/}

    <Info>
      <NewBadge>New</NewBadge>

      <Title>
        <Name target="__blank" href={'/vdp/'+props.vin}>
            {
                cutString(
                    (
                        props.build.year + " " +
                        props.build.make + " " +
                        props.build.model + " " +
                        (props.exterior_color ? props.exterior_color : '')
                    ), 35
                )
            }
        </Name>
        <Certified />
      </Title>

      <Details>{transmission}, {number(miles)} mi, {parseInt(cityMiles)}/{parseInt(highwayMiles)} MPG*</Details>

      <PriceRow>
        <Price>{currency(price)}</Price>
        {/*<Deal>Great Deal!</Deal>*/}
        {/*<Like />*/}
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
