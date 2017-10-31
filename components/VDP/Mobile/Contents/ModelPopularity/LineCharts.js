import styled from 'styled-components'
import SingleChart from './SingleChart.js'

const ChartsWrapper = styled.div`
  position: relative;
`

export default (props) =>
  <ChartsWrapper>
    {props.modelPopularity.map((item, key) => {
      return <SingleChart value={item.left} remaining={item.right} we={item.text} key={key} />
    })}
    {/* <SingleChart
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
    /> */}
  </ChartsWrapper>
