import styled from 'styled-components'
import { em } from 'polished'

import { Container, Row } from '~/layout'
import List from './List'
import seedData from './seedData'

const QuickOverview = styled.div`
  padding: ${em(80)} 0 ${em(5)};
`

export default () =>
  <QuickOverview>
    <Container>
      <Row>
        {seedData.map((s, index) =>
          <List
            key={index + s.type}
            type={s.type}
            populars={s.populars}
          />
        )}
      </Row>
    </Container>
  </QuickOverview>
