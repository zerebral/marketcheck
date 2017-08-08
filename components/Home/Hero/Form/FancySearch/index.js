import styled from 'styled-components'
import Input from './Input'
import Geolocation from './GeoLocation'

const FancySearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10px;
`

export default () =>
  <FancySearch>
    <Geolocation />
    <Input placeholder='Enter a location...' />
  </FancySearch>
