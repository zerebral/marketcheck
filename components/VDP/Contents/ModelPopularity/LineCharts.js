import styled from 'styled-components'
import SingleChart from './SingleChart.js'

const ChartsWrapper = styled.div`
  position: relative;
`

export default () =>
  <ChartsWrapper>
    <SingleChart value={47} remaining={21} color='green' />
    <SingleChart value={51} remaining={68} color='green' />
    <SingleChart value={112} remaining={73} color='red' />
    <SingleChart value={40} remaining={51} color='green' />
  </ChartsWrapper>
