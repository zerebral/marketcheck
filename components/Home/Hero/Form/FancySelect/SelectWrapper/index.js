import styled from 'styled-components'
import { colors } from '%/styles'
import { rem } from 'polished'
import { mediaMin } from '%/styles/mixins'
import Proptypes from 'prop-types'

const SelectWrapper = styled.div`
  position: relative;
  background-color: ${props => props.blue ? colors.blue : colors.white};
  color: ${props => props.blue ? colors.white : colors.blue};
  font-size: ${rem(16)};
  line-height: ${19 / 16};
  font-weight: 700;
  display: none;

  ${mediaMin.laptop`
    display: block;
  `}
`

SelectWrapper.propTypes = {
  blue: Proptypes.bool
}

export default SelectWrapper
