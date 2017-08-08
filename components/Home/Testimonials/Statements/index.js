import Statement from './Statement'
import styled from 'styled-components'

const Statements = styled.div`
  display: flex;
  justify-content: space-around;
`

export default () =>
  <Statements>
    <Statement />
    <Statement />
    <Statement />
  </Statements>
