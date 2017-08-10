import styled from 'styled-components'

const Item = styled.div`
  margin-right: ${props => props.logo ? '65px' : '40px'};
  display: ${props => props.logo ? 'block' : 'none'};
`

export default Item
