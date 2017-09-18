import styled from 'styled-components'
import { colors } from '%/styles'
import Listing from './Listing.js'

const Summary = styled.div`
  margin-bottom: 15px;
`

const Title = styled.p`
  opacity: 0.56;
  margin-bottom: 25px !important;
  text-transform: uppercase;
`

const MoreLink = styled.a`
  text-align: center;
  display: block;
  color: ${colors.softblue};
  font-size: 14px;
  line-height: 16.8px;
`

export default () =>
  <Summary>
    <Title>12 - Previous Listings</Title>
    <Listing />
    <Listing />
    <Listing />
    <MoreLink>9 More Previous Listings ( VIEW )</MoreLink>
  </Summary>
