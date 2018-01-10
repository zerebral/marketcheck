import Logo from './Logo'
import Wrapper from './Wrapper'
import Item from './Item'
import Link from './Link'
import links from './links'
import styled from 'styled-components'

const SpanBeta = styled.span`
  color: #fd4b2f;
`

export default () =>
  <Wrapper>
    <Item logo>
        <Link href='/'><Logo /><SpanBeta>Beta</SpanBeta></Link>
    </Item>
    {links.map((link, index) => (
      <Item key={link.name + index}>
        <Link href={link.route} target={link.target}>{link.name}</Link>
      </Item>
    ))}
  </Wrapper>
