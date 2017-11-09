import { cutString } from '%/format'
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
  Average
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
  Share
} from './Icons'

import { currency } from '%/format'

export default (props) =>
  <Wrapper>
    <Car>
      <NewBadge>New</NewBadge>

      <Title>
        <Name>{cutString(props.data.build.year + " " + props.data.build.make + " " + props.data.build.model + " " + props.data.exterior_color, 35)}</Name>
        <Certified />
      </Title>

      <Details>{props.data.build.transmission + " " + props.data.miles + "mi., " + props.data.build.city_miles.substring(0,2) + "/" + props.data.build.highway_miles.substring(0,2) + " MPG*"}</Details>

      <PriceRow>
        <Price>{currency(props.data.price)}</Price>
        <Deal>Great Deal!</Deal>
        <Like />
        <Share />
      </PriceRow>

      <Average>{currency(props.data.ref_price)} less than market average</Average>

      {false ? (
        <Features>
          <Bluetooth />
          <Cam />
          <Wheels />
          <Geo />
          <Air />
          <Brake />
          <Keyless />
        </Features>
      ) : 
        null
      }
    </Car>
  </Wrapper>
