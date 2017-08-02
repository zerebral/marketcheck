import styled from 'styled-components'

import A from './A'
import Logo from './Logo'

const Links = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: auto;
`

const Li = styled.li`
  margin-right: 40px;
`

const LogoLi = styled.li`
  margin-right: 65px;
`

export default () => (
  <Links>
    <LogoLi><A><Logo /></A></LogoLi>
    <Li><A>Home</A></Li>
    <Li><A>Research</A></Li>
    <Li><A>About</A></Li>
    <Li><A>FAQ</A></Li>
    <Li><A>For Dealers</A></Li>
  </Links>
)
