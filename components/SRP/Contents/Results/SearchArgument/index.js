import styled from 'styled-components'
import { em } from 'polished'
import { colors } from '%/styles'
import PinIcon from './pin.svg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`

const Argument = styled.span`
  color: ${colors.softblue};
  display: inline-block;
  font-size: ${em(18)};
  font-weight: normal;
  margin-right: 1em;
  vertical-align: bottom;
`

const SaveSearch = styled.a.attrs({ href: '#' })`
  color: ${colors.green};
  font-size: ${em(13)};
  display: inline-block;
  vertical-align: bottom;
`

const Location = styled.a.attrs({ href: '#' })`
  color: ${colors.softblue};
  font-size: ${em(13)};
  display: inline-block;
  text-align: right;
  vertical-align: bottom;
`

const Pin = styled(PinIcon)`
  display: inline-block;
  height: 15px;
  width: 15px;
`

export default ({
  argument,
  location
}) =>
  <Container>
    <div>
      <Argument>{ argument }</Argument>
      <SaveSearch>Save Search</SaveSearch>
    </div>
    <Location>
      {location}
      <Pin />
    </Location>
  </Container>
