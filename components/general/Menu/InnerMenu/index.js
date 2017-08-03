import Links from './Links'
import Icons from './Icons'
import Container from '~/general/Container'

import styled from 'styled-components'

const InnerMenu = styled.div`
  display: flex;
  padding: 20px 30px;
`

export default () => (
  <Container>
    <InnerMenu>
      <Links />
      <Icons />
    </InnerMenu>
  </Container>
)
