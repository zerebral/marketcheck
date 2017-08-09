import styled from 'styled-components'
import { em, clearFix } from 'polished'
import { grid } from '%/styles'
import { mediaMin } from '%/styles/mixins'

const padding = em(grid.gutter / 2)

const laptopStyles = mediaMin.laptop`
  width: 20%;
  margin-bottom: 0;
`

const SocialWrapper = styled.div`
  ${clearFix()}
  position: relative;
  padding-left: ${padding};
  padding-right: ${padding};
  float: left;
  width: 50%;
  margin-bottom: ${em(20)};

  ${laptopStyles}
`
export default SocialWrapper
