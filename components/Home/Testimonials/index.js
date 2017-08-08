import styled from 'styled-components'
import { rem } from 'polished'
import Title from './Title'

import { Container, Column, Row } from '~/layout'

const Testimonials = styled.div`
  padding: ${rem(110)} 0 ${rem(65)};
`

export default () =>
  <Testimonials>
    <Container>
      <Row>
        <Column laptop={{ cols: 8, offset: 2 }}>
          <Title />
        </Column>
      </Row>
    </Container>
  </Testimonials>
