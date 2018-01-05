import Seller from './Seller'
import Slideshow from './Slideshow'
import {colors} from '%/styles'
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

const calculateDelta = (mean_value, value, label) => {
    let delta = 0
    let mean = Math.round(mean_value)
    if(mean != null && value != null){
        delta = value - mean
    }
    let formated_delta = ""
    if(label === "price"){
        formated_delta = currency(Math.abs(delta))
    }else{
        formated_delta = number(Math.abs(delta))
    }

    if(delta < 0) {
        return(<Average>{formated_delta} {label === "miles" ? label : ''} less than market average</Average>)
    }else if (delta > 0){
        return(<Average style={{color: colors.red }}>{formated_delta} {label === "miles" ? label : ''} more than market average</Average>)
    }else{
        return (<Average ></Average>)
    }

}

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
  vdpUrl,
  stats
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

      <Details>
                {transmission ? transmission + ", " : ""}
                {miles? number(miles) + " mi, " : ""}
                {parseInt(cityMiles)}/{parseInt(highwayMiles)} MPG*</Details>

      <PriceRow>
        <Price>{currency(price)}</Price>
        {/*<Deal>Great Deal!</Deal>*/}
        {/*<Like />*/}
        <Share />
      </PriceRow>
        {(stats.price ? calculateDelta(stats.price.mean, price, "price") : "")}
      {/*<Average>{currency(874)} less than market average</Average>*/}

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
