import Circle from './Circle.js'
import styled from 'styled-components'

const ChartsWrapper = styled.div`
  margin-bottom: 40px;
  text-align: center;
`

const CircleWrapper = styled.div`
  margin-bottom: -140px;
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 35px;
  color: #313842;
`

const Info = styled.h6`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 50px;
  color: #39434c;
`

export default () =>
  <ChartsWrapper>
    <CircleWrapper>
      <Circle score={8.6} color='green' text='Very Good' />
    </CircleWrapper>
    <Title>Greenhouse Gas Emissions</Title>
    <Info>This shows the vehicle’s impact on climate change in terms of greenhouse gases / carbondioxide(CO2).</Info>
    <CircleWrapper>
      <Circle score={9.2} color='blue' text='Excellent!' />
    </CircleWrapper>
    <Title>Smog Rating</Title>
    <Info>This shows the vehicle’s emissions of pollutants known to cause smog and other forms of air pollution.</Info>
  </ChartsWrapper>
