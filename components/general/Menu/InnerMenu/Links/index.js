import Logo from './Logo'
import { rem } from 'polished'
import fonts from '%/styles/fonts'

import styled from 'styled-components'

const A = styled.a`
  display: block;
  color: #ffffff;
  font-size: ${rem(14)};
  font-family: ${fonts.fontFamily};
  font-weight: 400;

  &:hover,
  &:active {
    text-decoration: underline;
    font-weight: 700;
  }
`

const Li = styled.li`
  margin-right: ${props => props.logo ? '65px' : '40px'};
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: auto;
`

const links = [
  { name: 'Home', route: '#' },
  { name: 'Research', route: '#' },
  { name: 'About', route: '#' },
  { name: 'FAQ', route: '#' },
  { name: 'For Dealers', route: '#' }
]

export default () => (
  <Ul>
    <Li logo>
      <A href='/'><Logo /></A>
    </Li>
    {links.map((link, index) => (
      <Li key={link.name + index}><A href={link.route}>{link.name}</A></Li>
    ))}
  </Ul>
)
