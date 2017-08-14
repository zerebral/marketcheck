import { Container } from '~/layout'
import TopRow from './TopRow'
import Return from './Return'
import CarName from './CarName'
import Slideshow from './Slideshow'

export default ({
  name,
  brief,
  sliderPics,
  price,
  discount,
  miles
}) =>
  <Container>
    <TopRow>
      <Return />
      <CarName>{name}</CarName>
    </TopRow>
    <Slideshow slides={sliderPics} />
  </Container>
