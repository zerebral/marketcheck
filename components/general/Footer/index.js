import styled from 'styled-components'
import { colors } from '%/styles'
import { em, rgba } from 'polished'

import { Container, Row, Column } from '~/layout'

import Top from './Top'
import Bottom from './Bottom'

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
          <Top />
          <Bottom />
        </Column>
      </Row>
    </Container>
  </Footer>
