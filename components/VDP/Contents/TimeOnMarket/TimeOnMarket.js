import React from 'react'
import { Accordion } from '~/general'
import styled from 'styled-components'
import CircleGraphs from './CircleGraphs'

const P = styled.p`
  opacity: 0.56;
`

export default () =>
  <Accordion title='Time on Market' open >
    <P>Listed for sale for 189 days</P>

    <CircleGraphs />
  </Accordion>
