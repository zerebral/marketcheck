import styled from 'styled-components'
import { colors } from '%/styles'
import { rem } from 'polished'

import { Container, Row, Column } from '~/layout'
import { H2, P } from '~/general'

import Icon from './shield.svg'

const Deals = styled.div`
  background-color: ${colors.darkblue};
  color: #e1e5e7;
  padding: ${rem(50)} 0 ${rem(80)};
  overflow: hidden;
`

const Shield = styled(Icon)`
  width: 100%;
  position: absolute;
`

const CustomP = styled(P)`
  margin-bottom: 0;
`

export default () =>
  <Deals>
    <Container>
      <Row>
        <Column laptop={{ cols: 4, offset: 2 }}>
          <H2>Trust and Transparency</H2>
          <CustomP>For every listing, we show you time on market, price history, a full local-market price analysis and dealer reviews. Everything you need to know before you contact the dealer.</CustomP>
        </Column>
        <Column laptop={{ cols: 4, offset: 1 }}>
          <Shield />
        </Column>
      </Row>
    </Container>
  </Deals>
