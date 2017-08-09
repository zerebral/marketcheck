import styled from 'styled-components'
import { em } from 'polished'
import Title from './Title'

import { Container, Column, Row } from '~/layout'

const Listings = styled.div`
  padding: ${em(65)} 0 ${em(50)};
`

export default () =>
  <Listings>
    <Container>
      <Row>
        <Column laptop={{ cols: 8, offset: 2 }}>
          <Title />
        </Column>
      </Row>
    </Container>
  </Listings>
