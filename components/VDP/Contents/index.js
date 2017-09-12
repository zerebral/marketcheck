import { Container } from '~/layout'
import ContentsWrapper from './ContentsWrapper'
import { Accordion } from '~/general'

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

export default props =>
  <ContentsWrapper>
    <Container>
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
      <Accordion title='Safety Ratings'>
        Such accordant wow Commodo vitae, aliquam ut, posuere eget, dui.
        Praesent massa dui, mattis et, vehicula auctor, iaculis id, diam. Morbi
        viverra neque sit amet risus. Nunc pellentesque aliquam orci. Proin
        neque elit, mollis vel, tristique nec, varius consectetuer, lorem. Nam
        malesuada ornare nunc. Duis turpis turpis, fermentum a, aliquet quis,
        sodales at, dolor. Duis eget velit eget risus fringilla hendrerit.
        Nulla facilisi. Mauris turpis pede, aliquet ac, mattis sed, consequat
        in, massa. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Etiam egestas posuere metus. Aliquam
        erat volutpat. Donec non tortor. Vivamus posuere nisi mollis dolor.
        Quisque porttitor nisi ac.
      </Accordion>
      <Accordion title='Similar Local Cars'>
        Such accordant wow Commodo vitae, aliquam ut, posuere eget, dui.
        Praesent massa dui, mattis et, vehicula auctor, iaculis id, diam. Morbi
        viverra neque sit amet risus. Nunc pellentesque aliquam orci. Proin
        neque elit, mollis vel, tristique nec, varius consectetuer, lorem. Nam
        malesuada ornare nunc. Duis turpis turpis, fermentum a, aliquet quis,
        sodales at, dolor. Duis eget velit eget risus fringilla hendrerit.
        Nulla facilisi. Mauris turpis pede, aliquet ac, mattis sed, consequat
        in, massa. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Etiam egestas posuere metus. Aliquam
        erat volutpat. Donec non tortor. Vivamus posuere nisi mollis dolor.
        Quisque porttitor nisi ac.
      </Accordion>
    </Container>
  </ContentsWrapper>
