import ContentsWrapper from './ContentsWrapper'
import SummaryReport from './SummaryReport'
import VehicleInformation from './VehicleInformation'
import MarketComparison from './MarketComparison'
import AveragesOverTime from './AveragesOverTime'
import TimeOnMarket from './TimeOnMarket'
import IncludedFeatures from './IncludedFeatures'
import FuelEfficiency from './FuelEfficiency'
import Environmental from './Environmental'
import ModelPopularity from './ModelPopularity'
import Competition from './Competition'
import ResaleValue from './ResaleValue'
import Safety from './Safety'
import Similar from './Similar'

export default props =>
  <ContentsWrapper>
    <SummaryReport />
    <VehicleInformation />
    <MarketComparison />
    <AveragesOverTime />
    <TimeOnMarket />
    <IncludedFeatures />
    <FuelEfficiency />
    <Environmental />
    <ModelPopularity />
    <Competition />
    <ResaleValue />
    <Safety />
    <Similar />
  </ContentsWrapper>