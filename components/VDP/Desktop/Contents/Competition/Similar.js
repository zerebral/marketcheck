import styled from 'styled-components'
import Comparison from './Comparison.js'

const Wrapper = styled.div`
  padding: 30px 0 20px;
`

export default () =>
  <Wrapper>
    <Comparison />
    <Comparison />
    <Comparison />
    <Comparison />
  </Wrapper>
