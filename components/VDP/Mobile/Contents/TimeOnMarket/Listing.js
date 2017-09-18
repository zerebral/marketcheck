import styled from 'styled-components'
import External from './external.svg'
import { colors } from '%/styles'
import { FlexRow } from '~/layout'
import StatCol from './StatCol.js'

const Listing = styled.div`
  margin-bottom: 40px;
`

const DateRange = styled.h6`
  font-size: 14px;
  line-height: 2;
  font-weight: 400;
`
const Vendor = styled.a`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14.4px;
  color: ${colors.blue};
  margin-bottom: 8px;

  svg {
    margin-left: 8px;
    width: 8px;
    height: 8px;
  }
`

export default () =>
  <Listing>
    <DateRange>June 23 2017 - July 10, 2017</DateRange>
    <Vendor>
      Drew International Auto Sales
      <External />
    </Vendor>
    <FlexRow noMargin >
      <StatCol money gain />
      <StatCol />
    </FlexRow>
  </Listing>
