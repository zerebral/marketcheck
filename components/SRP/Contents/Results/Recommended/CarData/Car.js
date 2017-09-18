import {
  Car,
  Wrapper,
  NewBadge,
  Name,
  Title,
  PriceRow,
  Price,
  Drew
} from './Components.js'

import Certified from './certified.svg'

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

      <Drew href='#' target='_blank'>
        Drew International Auto Sales
      </Drew>

      <PriceRow>
        <Price>{currency(data.price)}</Price>
      </PriceRow>
    </Car>
  </Wrapper>
