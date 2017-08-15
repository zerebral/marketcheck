import { FlexRow } from '~/layout'

import Price from './Price'

export default ({
  price
}) =>
  <FlexRow noMargin >
    <Price>{price}</Price>
  </FlexRow>
