import { cutString, currency, capitalize } from '%/format'
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

export default (props) => {
  return (
    <Wrapper>
      <Car>
        <NewBadge>{capitalize(props.filters.car_type)}</NewBadge>

        <Title>
          <Name target="__blank" href={'/vdp/'+props.data.vin}>
          { 
            cutString(
              props.data.build.year + " " +
              props.data.build.make + " " +
              props.data.build.model + " " +
              (props.data.exterior_color ? props.data.exterior_color : '')
            )
          }
          </Name>
          {props.data.is_certified && props.data.is_certified == 1 ? <Certified /> : null }
        </Title>

        <Details>
        {
          (props.data.build.transmission ? props.data.build.transmission : '') + " " +
          (props.data.miles ? props.data.miles + "mi., " : '') +
          (props.data.build.city_miles ? props.data.build.city_miles.substring(0,2) : '') +
          "/" +
          (props.data.build.highway_miles ? props.data.build.highway_miles.substring(0,2) + " MPG*" : '') 
        }
        </Details>

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
  )
}
