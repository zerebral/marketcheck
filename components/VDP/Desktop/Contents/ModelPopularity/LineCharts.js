import styled from 'styled-components'
import SingleChart from './SingleChart.js'

const ChartsWrapper = styled.div`
  position: relative;
`

export default () =>
  <ChartsWrapper>
    <SingleChart
      value={47}
      remaining={68}
      we='2000 Toyota Avalon XL'
      them='All Other Cars'
    />
    <SingleChart
      value={51}
      remaining={68}
      we='Toyota'
      them='Other Manufacturers'
    />
    <SingleChart
      value={112}
      remaining={73}
      we='Avalon'
      them='Other Sedans'
    />
    <SingleChart
      value={40}
      remaining={51}
      we='2000 Toyota'
      them='Other Model Years'
    />
  </ChartsWrapper>
