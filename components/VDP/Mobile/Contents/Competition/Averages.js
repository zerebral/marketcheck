import { rgba } from 'polished'
import { FillBody } from '~/general/Accordion'
import styled from 'styled-components'
import { currency, number } from '%/format'

const backgroundColor = rgba('#3c4147', 0.08)

const Title = styled.h4`
  font-size: 14px;
  line-height: 2;
  color: ${rgba('#1f2630', 0.56)};
  margin-bottom: 16px;
`

const Name = styled.h4`
  font-weight: 500px;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  margin-right: 10px;
`

const Stat = styled.h5`
  font-size: 14px;
  line-height: 2;
  color: ${rgba('#1f2630', 0.56)};
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`

export default () =>
  <FillBody customBackground={backgroundColor}>
    <Title>2017 Toyota Camry Market Averages</Title>
    <Row>
      <Name>Avg. Price</Name>
      <Stat>{currency(14345)}</Stat>
    </Row>
    <Row>
      <Name>Avg. Mileage</Name>
      <Stat>{number(25656)} mi</Stat>
    </Row>
    <Row>
      <Name>Avg. Market Value</Name>
      <Stat>{currency(17345)}</Stat>
    </Row>
  </FillBody>
