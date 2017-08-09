import styled from 'styled-components'
import { colors } from '%/styles'
import { em, rgba } from 'polished'

import { Container, Row, Column } from '~/layout'

const Footer = styled.footer`
  background-color: ${colors.darkblue};
  color: ${rgba(colors.white, 0.56)};
  padding-top: ${em(75)};
  padding-bottom: ${em(55)};
`

export default () =>
  <Footer>
    <Container>
      <Row>
        <Column laptop={{ cols: 10, offset: 1 }}>
          <h1>Such foots</h1>
        </Column>
      </Row>
    </Container>
  </Footer>
