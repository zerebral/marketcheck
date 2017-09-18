import {
  Navigation,
  NavLink,
  Cta
} from './Components'

import { Container, FlexRow } from '~/layout'

export default props =>
  <Navigation>
    <Container>
      <FlexRow noMargin align='center' justify='space-around'>
        <NavLink>Overview</NavLink>
        <NavLink>Price</NavLink>
        <NavLink>Mileage</NavLink>
        <NavLink>Fuel</NavLink>
        <NavLink>Features</NavLink>
        <NavLink>Popularity</NavLink>
        <NavLink>Safety</NavLink>
        <NavLink>Environmental</NavLink>
        <NavLink>Similar</NavLink>

        <Cta>Request Best Price</Cta>
      </FlexRow>
    </Container>
  </Navigation>
