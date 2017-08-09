import styled from 'styled-components'
import { em } from 'polished'

import { Container, Row } from '~/layout'

const QuickOverview = styled.div`
  padding: ${em(80)} 0;
`

export default () =>
  <QuickOverview>
    <Container>
      <Row>So quick</Row>
    </Container>
  </QuickOverview>
