import Logo from './Logo'
import Wrapper from './Wrapper'
import Item from './Item'
import Link from './Link'

import links from './links'

export default () =>
  <Wrapper>
    <Item logo>
      <Link href='/'><Logo /></Link>
    </Item>
    {links.map((link, index) => (
      <Item key={link.name + index}>
        <Link href={link.route}>{link.name}</Link>
      </Item>
    ))}
  </Wrapper>
