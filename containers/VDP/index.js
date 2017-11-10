import VDP from '~/VDP'
import vdpdata from './vdpdata'

export default ({
  averages,
  similarModelsGraph,
  modelPopularity,
  vinHistory,
  nationalAverage,
  localAverage,
  dom,
  fuelEfficiency,
  resaleValue,
  dealerRatings,
  source,
  dealerReviews,
  safetyRatings,
  summaryReport,
  environmentalScores,
  averageMarketMiles,
  scatterYourCar,
  scatterSimilar,
  scatterNational,
  props,
  price,
  miles,
  vin,
  vdp_url: vdpUrl,
  inventory_type: type,
  stock_no: stockNumber,
  exterior_color: exteriorColor,
  interior_color: interiorColor,
  media: {
    photo_links: sliderPics,
  },
  build: {
    make,
    model,
    year,
    engine,
    transmission,
    drivetrain,
    doors,
    trim,
    city_miles: cityMiles,
    highway_miles: highwayMiles,
    body_type: body,
    fuel_type: fuel,
  },
  extra : {
    features
  }
}) =>

  <VDP 
  {...vdpdata} 
  name={`${make} ${model}`}
  brief={`Stock # ${stockNumber}, ${engine}, ${transmission}, ${miles} mi., ${parseInt(cityMiles)}/${parseInt(highwayMiles)} MPG*`}
  price={price}
  model={model}
  make={make}
  year={year}
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
  sliderPics={sliderPics}
  scatterSimilar={scatterSimilar}
  scatterNational={scatterNational}
  scatterYourCar={scatterYourCar} 
  averageMarketMiles={averageMarketMiles}
  environmentalScores={environmentalScores}
  summaryReport={summaryReport}
  safetyRatings={safetyRatings}
  dealerReviews={dealerReviews}
  dealerWebsite={`//${source}`}
  dealerRatings={dealerRatings}
  resaleValue={resaleValue}
  fuelEfficiency={fuelEfficiency}
  dom={dom}
  localAverage={localAverage}
  nationalAverage={nationalAverage}
  vinHistory={vinHistory}
  modelPopularity={modelPopularity}
  similarModelsGraph={similarModelsGraph}
  averages={averages}
  vdpUrl={vdpUrl}
  features={features}
  {...props} 
  />
