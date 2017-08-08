import styled from 'styled-components'
import { em } from 'polished'
import { colors } from '%/styles'

import { H4 } from '~/general'
import { Column, Row, Container } from '~/layout'

const Makers = styled.div`
  padding: ${em(70)} 0 ${em(50)};
  background-color: ${colors.softgray};
  text-align: center;
  color: ${colors.softblue};
`

const M4 = H4.extend`
  margin-bottom: ${em(40)};
`

export default () =>
  <Makers>
    <Container>
      <Row>
        <Column laptop={{ cols: 10, offset: 1 }}>
          <M4>Popular Makers</M4>
        </Column>
      </Row>
    </Container>
  </Makers>
