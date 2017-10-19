import { Container } from '~/layout'
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
    <Container>
      <SummaryReport {...props} />
      <VehicleInformation {...props} />
      <MarketComparison {...props}/>
      <AveragesOverTime {...props} />
      <TimeOnMarket {...props} />
      <IncludedFeatures {...props} />
      <FuelEfficiency {...props} />
      <Environmental {...props} />
      <ModelPopularity {...props} />
      <Competition {...props} />
      <ResaleValue {...props} />
      <Safety {...props} />
      <Similar {...props} />
    </Container>
  </ContentsWrapper>
