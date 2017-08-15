import styled from 'styled-components'
import { rem, em } from 'polished'

const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: ${rem(15)};
  line-height: ${18 / 15};
  margin-bottom: ${em(18, 15)};
`

export default Label
