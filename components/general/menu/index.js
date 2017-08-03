import InnerMenu from './InnerMenu'
import styled from 'styled-components'
import colors from '%/styles/colors'
import PropTypes from 'prop-types'

const Menu = styled.nav`
  background-color: ${props => props.active ? colors.blue : 'transparent'};
  position: ${props => props.active ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.2s;
`
Menu.propTypes = {
  active: PropTypes.bool
}

export default ({active, selfRef}) => (
  <Menu innerRef={selfRef} active={active}>
    <InnerMenu />
  </Menu>
)
