import Links from './Links'
import Icons from './Icons'
import Container from '~/general/Container'
import colors from '%/styles/colors'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  padding: 20px 30px;
`

const Nav = styled.nav`
  background-color: ${props => props.active ? colors.blue : 'transparent'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.2s;
`

Nav.propTypes = {
  active: PropTypes.bool
}

export default ({active}) => (
  <Nav active={active}>
    <Container>
      <Menu>
        <Links />
        <Icons />
      </Menu>
    </Container>
  </Nav>
)
