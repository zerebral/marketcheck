import styled from 'styled-components'
import Input from './Input'
import Geolocation from './GeoLocation'
import { mediaMin } from '%/styles/mixins'

const FancySearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 5%;

  ${mediaMin.phablet`
  padding: 0 20px;
  `}
`

export default () =>
  <FancySearch>
    <Geolocation />
    <Input placeholder='Enter a location...' />
  </FancySearch>
