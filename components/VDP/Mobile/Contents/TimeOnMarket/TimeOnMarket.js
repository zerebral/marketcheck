import React from 'react'
import Accordion, { FillBody } from '~/general/Accordion'
import styled from 'styled-components'
import CircleGraphs from './CircleGraphs'
import Summary from './Summary.js'

const P = styled.p`
  opacity: 0.56;
`

export default () =>
  <Accordion title='Time on Market' blue >
    <FillBody first >
      <P>Listed for sale for 189 days</P>
      <CircleGraphs />
    </FillBody>
    <FillBody customBackground='transparent'>
      <Summary />
    </FillBody>
  </Accordion>
