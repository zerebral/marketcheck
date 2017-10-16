import VDP from '~/VDP'
import vdpdata from './vdpdata'

export default ({
  price,
  miles,
  vin,
  inventory_type: type,
  stock_no: stockNumber,
  exterior_color: exteriorColor,
  interior_color: interiorColor,
  build: {
    make,
    model,
    engine,
    transmission,
    drivetrain,
    doors,
    trim,
    city_miles: cityMiles,
    highway_miles: highwayMiles,
    body_type: body,
    fuel_type: fuel,
  }
}) =>

  <VDP 
  {...vdpdata} 
  //{...props} 
  name={`${make} ${model}`}
  brief={`Stock # ${stockNumber}, ${engine}, ${transmission}, ${miles} mi., ${parseInt(cityMiles)}/${parseInt(highwayMiles)} MPG*`}
  price={price}
  model={model}
  type={type}
  stockNumber={stockNumber}
  trim={trim}
  body={body}
  exteriorColor={exteriorColor}
  interiorColor={interiorColor}
  doors={doors}
  vin={vin}
  miles={miles}
  engine={engine}
  transmission={transmission}
  fuel={fuel}
  drivetrain={drivetrain}
  cityMiles={cityMiles}
  highwayMiles={highwayMiles}
  />
