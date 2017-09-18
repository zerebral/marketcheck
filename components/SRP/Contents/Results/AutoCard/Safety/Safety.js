import styled from 'styled-components'
import Seller from './Seller'

const Container = styled.div`
  display: inline-block;
  padding: 1.8em 0;
  text-align: right;
  vertical-align: top;
`

export default ({data}) =>
  <Container>
    <Seller
      name='Drew International Sales'
      location={data.location}
      distance={data.miles}
      rating={data.rating}
      reviews={data.reviews}
      website='#'
    />
  </Container>
