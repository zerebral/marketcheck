import InnerMenu from './InnerMenu'
import styled, { keyframes } from 'styled-components'
import colors from '%/styles/colors'
import PropTypes from 'prop-types'

const appear = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const animation = `${appear} 0.5s ease`

const Menu = styled.nav`
  background-color: ${props => props.active ? colors.blue : 'transparent'};
  position: ${props => props.active ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.2s;
  animation: ${props => props.active ? animation : 'none'};
`
Menu.propTypes = {
  active: PropTypes.bool
}

export default ({active, selfRef}) => (
  <Menu innerRef={selfRef} active={active}>
    <InnerMenu />
  </Menu>
)
