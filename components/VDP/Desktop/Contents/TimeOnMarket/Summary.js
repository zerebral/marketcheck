import styled from 'styled-components'
import { colors } from '%/styles'
import Listing from './Listing.js'

const Summary = styled.div`
  margin-bottom: 15px;
  max-width: 90%;
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

export default (props) =>
  <Summary>
    <Title>{props.vinHistory.length} - Previous Listings</Title>
    {props.vinHistory.map((listing, key) => {
      return <Listing key={key} price={listing.price} initialDate={listing.scraped_at_date} lastDate={listing.last_seen_at_date} source={`//${listing.source}`} miles={listing.miles} sellerName={listing.seller_name}/>
    })}
  
    {/* <MoreLink>9 More Previous Listings ( VIEW )</MoreLink> */}
  </Summary>
