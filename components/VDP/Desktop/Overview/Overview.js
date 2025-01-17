import { Container, FlexRow, FlexCol } from '~/layout'
import Slideshow from './Slideshow'
import { currency, number } from '%/format'
import Share from '../../../SRP/Contents/Results/AutoCard/CarData/ShareComponent'
import {
  TopRow,
  CarName,
  Wrapper,
  Brief,
  Price,
  Text,
  Icon,
  Like,
  ThreeSixty,
  Play,
  Slides,
  TabLink
} from './Components'

export default ({
  props,
  name,
  brief,
  sliderPics,
  price,
  discount,
  miles,
  averages,
  vin
}) => {
    console.log('props', props)
    return (
        <Wrapper>
          <TopRow>
            <Container>
              <FlexRow align='flex-end'>
                <FlexCol cols={4}>
                  <FlexRow noMargin align='center'>
                    <CarName>{name}</CarName>
                    <Icon href='#' style={{marginRight: '16px'}}><Like /></Icon>
                    <Share title={name} link={'/vdp/' + vin} />
                  </FlexRow>
                  <Brief>{brief}</Brief>
                </FlexCol>
                <FlexCol cols={3} offset={2}>
                  <FlexRow noMargin justify='flex-end'>
                    <TabLink active >
                      <Slides />
                    </TabLink>
                    <TabLink>
                      <Play />
                    </TabLink>
                    <TabLink>
                      <ThreeSixty />
                    </TabLink>
                  </FlexRow>
                </FlexCol>
                <FlexCol cols={3}>
                  <Price>{currency(price)}</Price>
                  <Text>{price > averages.price ? currency(price - averages.price) + ' more' : currency(averages.price - price) + ' less'} than market average</Text>
                  <Text>{miles > averages.miles ? number(miles - averages.miles) + ' miles more' : number(averages.miles - miles) + ' miles less'} than market average</Text>
                </FlexCol>
              </FlexRow>
            </Container>
          </TopRow>
          <Container>
            <Slideshow slides={sliderPics} />
          </Container>
        </Wrapper>
    )
}
