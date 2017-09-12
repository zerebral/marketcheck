import styled from 'styled-components'
import { rgba } from 'polished'
import { FlexRow, FlexCol } from '~/layout'
import { currency, number } from '%/format'

const Title = styled.h4`
  font-size: 14px;
  margin-bottom: 15px;
  color: ${rgba('#1F2630', 0.56)};
`

const Label = styled.h6`
  text-transform: uppercase;
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  margin-bottom: 20px;
`

const Comparison = styled.div`
  border-top: 1px solid #ccc;
  padding: 20px 0;
`
export default () =>
  <Comparison>
    <Title>2017 Toyota Camry</Title>
    <FlexRow>
      <FlexCol cols={3.5}>
        <Label>Price</Label>
        <Title>{currency(14345)}</Title>
      </FlexCol>
      <FlexCol cols={3.5}>
        <Label>Mileage</Label>
        <Title>{number(25656)} mi</Title>
      </FlexCol>
      <FlexCol cols={5}>
        <Label>Est. Market Value</Label>
        <Title>{currency(14345)}</Title>
      </FlexCol>
    </FlexRow>
  </Comparison>
