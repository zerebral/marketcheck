import styled from 'styled-components'
import { FlexRow as FR, Container } from '~/layout'
import { currency, number } from '%/format'
import { Button } from '~/general'
import Share from './share.svg'
import Like from './like.svg'
import Icon from './Icon'

import Price from './Price'
import Text from './Text'

const FlexRow = styled(FR)`
  margin-bottom: 10px;
`

export default ({
  price,
  discount,
  miles,
  averages,
  vdpUrl
}) => {
  return (
    <Container>
      <FlexRow noMargin >
        <Price>{currency(price)}</Price>
        <Button primary lowercase href={vdpUrl} target='_blank'>Request Best Price</Button>
      </FlexRow>
      <Text>{price > averages.price ? currency(price - averages.price) + ' more' : currency(averages.price - price) + ' less'} than market average</Text>
      <Text>{miles > averages.miles ? number(miles - averages.miles) + ' miles more' : number(averages.miles - miles) + ' miles less'} than market average</Text>
      <FlexRow noMargin >
        <Icon href='#'><Like /></Icon>
        <Icon href='#'><Share /></Icon>
      </FlexRow>
    </Container>)
}
