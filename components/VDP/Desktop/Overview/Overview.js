import { Container, FlexRow, FlexCol } from '~/layout'
import Slideshow from './Slideshow'
import { currency, number } from '%/format'

import {
  TopRow,
  CarName,
  Wrapper,
  Brief,
  Price,
  Text,
  Icon,
  Like,
  Share
} from './Components'

export default ({
  name,
  brief,
  sliderPics,
  price,
  discount,
  miles
}) =>
  <Wrapper>
    <TopRow>
      <Container>
        <FlexRow align='flex-end'>
          <FlexCol cols={4}>
            <FlexRow noMargin align='center'>
              <CarName>{name}</CarName>
              <Icon href='#'><Like /></Icon>
              <Icon href='#'><Share /></Icon>
            </FlexRow>
            <Brief>{brief}</Brief>
          </FlexCol>
          <FlexCol cols={3} offset={2}>
            Moar Icons
          </FlexCol>
          <FlexCol cols={3}>
            <Price>{currency(price)}</Price>
            <Text>{currency(discount)} less than market average</Text>
            <Text>{number(miles)} miles less than market average</Text>
          </FlexCol>
        </FlexRow>
      </Container>
    </TopRow>
    <Container>
      <Slideshow slides={sliderPics} />
    </Container>
  </Wrapper>
