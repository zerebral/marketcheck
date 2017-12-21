import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {
  Navigation,
  NavLink,
  Cta
} from './Components'

import { Container, FlexRow } from '~/layout'

const options = {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: 650, // Scrolls to element + 50 pixels down the page

}
export default props =>
  <Navigation>
    <Container>
      <FlexRow noMargin align='center' justify='space-around'>
        <NavLink href='javascript:;' onClick={ () => { scroll.scrollToTop(100); }}>Overview</NavLink>
        <NavLink href='javascript:;' onClick={ () => { scroller.scrollTo('summaryContainer', options)}}>Summary</NavLink>
        <NavLink href='javascript:;' onClick={ () => { scroller.scrollTo('marketContainer', options)}}>Market</NavLink>
        <NavLink href='javascript:;' onClick={ () => { scroller.scrollTo('marketAveragesContainer', options)}}>Averages</NavLink>
        <NavLink href='javascript:;' onClick={ () => { scroller.scrollTo('historyContainer', options)}}>History</NavLink>
        <NavLink href='javascript:;' onClick={ () => { scroller.scrollTo('featuresContainer', options)}}>Features</NavLink>
        <NavLink href='javascript:;' onClick={ () => { scroller.scrollTo('fuelContainer', options)}} >Fuel</NavLink>
        <NavLink href='javascript:;' onClick={ () => { scroller.scrollTo('popularityContainer', options)}}>Popularity</NavLink>
        {/*<NavLink href='javascript:;' onClick={ () => { scroller.scrollTo('similarContainer', options)}}>Similar Cars</NavLink>*/}
        <Cta href={props.vdpUrl} target='_blank'>View on dealer website</Cta>
      </FlexRow>
    </Container>
  </Navigation>
