import Circle from './Circle.js'
import styled from 'styled-components'

const ChartsWrapper = styled.div`
  margin-bottom: 40px;
`

export default () =>
  <ChartsWrapper>
    <Circle score={8.6} color='green' />
    <Circle score={9.2} color='blue' />
  </ChartsWrapper>
