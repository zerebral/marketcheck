import styled from 'styled-components'
import SVG from './search.svg'
import { rem } from 'polished'

const SearchIcon = styled(SVG)`
  fill: #b0bec5;
  width: ${rem(22)};
  margin: auto;
`

const Submit = styled.button`
  padding: ${rem(20)} ${rem(25)};
  display: flex;
  align-items: center;
  justify-content: center;
  &:active, &:focus {
    outline: 1px dotted;
  }
`

export default () =>
  <Submit type='submit'>
    <SearchIcon />
  </Submit>
