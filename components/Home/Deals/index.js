import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMin } from '%/styles/mixins'
import { em } from 'polished'

import { Container, Row, Column } from '~/layout'
import { H2, P } from '~/general'

import Icon from './ribbon.svg'

const Deals = styled.div`
  background-color: ${colors.darkblue};
  color: #e1e5e7;
  padding: ${em(50)} 0 ${em(30)};
  overflow: hidden;
  ${mediaMin.laptop`
  padding: ${em(100)} 0;
  `}
`

const Ribbon = styled(Icon)`
  width: 60%;
  margin: ${em(10)} auto 0;
  display: block;
  ${mediaMin.laptop`
    margin: 0;
    width: 100%;
    position: absolute;
  `}
`

export default () =>
  <Deals>
    <Container>
      <Row>
        <Column laptop={{ cols: 4, offset: 2 }}>
          <H2>Great Deals from Great Dealers</H2>
          <P>With one search, find the best deals first. Organic rankings are based on market value and dealer reputation, not by how much a dealer pays (like the other guys).</P>
        </Column>
        <Column laptop={{ cols: 5 }}>
          <Ribbon />
        </Column>
      </Row>
    </Container>
  </Deals>
