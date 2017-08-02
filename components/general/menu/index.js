import Links from './Links'
import Icons from './Icons'
import Container from '~/general/Container'

import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  padding: 20px 30px;
`

export default () => (
  <nav>
    <Container>
      <Menu>
        <Links />
        <Icons />
      </Menu>
    </Container>
  </nav>
)
