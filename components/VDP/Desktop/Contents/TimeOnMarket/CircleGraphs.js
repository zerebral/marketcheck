import CircleGraphWrapper from './CircleGraphsWrapper'
import ChartMaker from './ChartMaker.js'

export default () =>
  <CircleGraphWrapper>
    <ChartMaker days={189} text='This Car' />
    <ChartMaker days={245} text='Local Average' />
    <ChartMaker days={302} text='National Average' />
  </CircleGraphWrapper>
