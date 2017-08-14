import { Container, FlexRow } from '~/layout'
import TopRow from './TopRow'
import Return from './Return'
import CarName from './CarName'
import Slideshow from './Slideshow'
import OverviewWrapper from './OverviewWrapper'
import Brief from './Brief'

export default ({
  name,
  brief,
  sliderPics,
  price,
  discount,
  miles
}) =>
  <OverviewWrapper>
    <TopRow>
      <Return />
      <CarName>{name}</CarName>
    </TopRow>
    <Container>
      <Brief>{brief}</Brief>
      <Slideshow slides={sliderPics} />
      <FlexRow noMargin >Flexy</FlexRow>
    </Container>
  </OverviewWrapper>
