import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { cutString } from '%/format'
import Seller from './Seller'

const Container = styled.div`
  display: inline-block;
  padding: 1.8em 0;
  text-align: right;
  vertical-align: top;
  ${mediaMax.largeTablet`
    padding: 0 30px;
  `}
`

export default (props) =>
  <Container>
    <Seller
      name={cutString(props.data.dealer.name, 25)}
      location={props.data.dealer.city + ", " + props.data.dealer.country}
      distance={props.data.dist ? props.data.dist : 0}
      rating={0}
      reviews={0}
      website={props.data.vdp_url}
    />
  </Container>
