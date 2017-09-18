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

export default ({
  data
}) =>
  <Wrapper>
    <Car>
      <NewBadge>New</NewBadge>

      <Title>
        <Name>{data.name}</Name>
        <Certified />
      </Title>

      <Details>{data.brief}</Details>

      <PriceRow>
        <Price>{currency(data.price)}</Price>
        <Deal>Great Deal!</Deal>
        <Like />
        <Share />
      </PriceRow>

      <Average>{currency(data.lessPrice)} less than market average</Average>

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
  </Wrapper>
