import {
  Name,
  Seller,
  External,
  Dot,
  Location,
  LocText
} from './Components.js'

import {number} from '%/format'

export default ({
  name,
  location,
  distance,
  rating,
  reviews,
  website
}) =>
  <Seller>
    <Name href={website} target='_blank'>
      {name}
      <External width='17' />
    </Name>
    <Location>
      <LocText>{location}</LocText>
      <Dot />
      <LocText faded >{number(distance)} miles</LocText>
    </Location>
  </Seller>
