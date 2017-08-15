import styled from 'styled-components'
import { FlexRow as FR, Container } from '~/layout'
import { currency, number } from '%/format'
import { Button } from '~/general'
import Like from './like.svg'
import Share from './share.svg'
import Icon from './Icon'

import Price from './Price'
import Text from './Text'

const FlexRow = styled(FR)`
  margin-bottom: 10px;
`

export default ({
  price,
  discount,
  miles
}) =>
  <Container>
    <FlexRow noMargin >
      <Price>{currency(price)}</Price>
      <Button primary >Request Best Price</Button>
    </FlexRow>
    <Text>{currency(discount)} less than market average</Text>
    <Text>{number(miles)} miles less than market average</Text>
    <FlexRow noMargin >
      <Icon href='#'><Like /></Icon>
      <Icon href='#'><Share /></Icon>
    </FlexRow>
  </Container>
