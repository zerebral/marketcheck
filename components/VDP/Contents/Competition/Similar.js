import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from '%/styles'
import Comparison from './Comparison.js'

const Wrapper = styled.div`
  padding: 30px 0 20px;
`

const Title = styled.h4`
  font-size: 14px;
  margin-bottom: 15px;
  color: ${rgba('#1F2630', 0.56)};
`

const MoreLink = styled.a`
  text-align: center;
  display: block;
  color: ${colors.softblue};
  font-size: 14px;
  line-height: 16.8px;
`

export default () =>
  <Wrapper>
    <Title>45 Similar Cars for Sale</Title>
    <Comparison />
    <Comparison />
    <Comparison />
    <Comparison />

    <MoreLink>23 Additional Listings ( VIEW )</MoreLink>
  </Wrapper>
