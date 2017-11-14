import styled from 'styled-components'
import { em } from 'polished'
import { colors } from '%/styles'
import { mediaMax, mediaMin } from '%/styles/mixins'
import PinSvg from './pin.svg'

const Container = styled.div`
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  ${mediaMax.phone`
    display: block;
    padding: 1em;
    text-align: right;
  `}
`

const Argument = styled.span`
  color: ${colors.softblue};
  display: inline-block;
  font-size: ${em(18)};
  font-weight: normal;
  margin-right: 1em;
  vertical-align: bottom;
  ${mediaMax.largeTablet`
    font-size: ${em(14)};
  `}
  ${mediaMax.phone`
    display: block;
    text-align: left;
  `}
`

const SaveSearch = styled.a.attrs({ href: '#' })`
  color: ${colors.green};
  font-size: ${em(13)};
  display: inline-block;
  vertical-align: bottom;
  ${mediaMax.largeTablet`
    font-size: ${em(12)};
  `}
`

const SaveSearchTop = styled(SaveSearch)`
  ${mediaMin.phone`
    display: none;
  `}
  ${mediaMax.phone`
    display: inline-block;
    margin-bottom: 1em;
  `}
`

const SaveSearchBottom = styled(SaveSearch)`
  ${mediaMax.phone`
    display: none;
  `}
`

const Location = styled.a.attrs({ href: '#' })`
  color: ${colors.softblue};
  font-size: ${em(13)};
  display: inline-block;
  text-align: right;
  vertical-align: bottom;
  ${mediaMax.largeTablet`
    font-size: ${em(12)};
  `}
  ${mediaMax.phone`
    display: none;
  `}
`

const Pin = styled(PinSvg)`
  display: inline-block;
  height: 15px;
  width: 15px;
`

export default ({
  argument,
  saveSearch,
  location
}) => {
  return (
    <Container>
      <div>
        <SaveSearchTop>Save Search</SaveSearchTop>
        <Argument>{ argument }</Argument>
        { false ? <SaveSearchBottom onClick={saveSearch}>Save Search</SaveSearchBottom> : false}
      </div>
      <Location>
        {location}
        <Pin />
      </Location>
    </Container>
  )
}
