import Section from '~/VDP/Section'
import CircleGraphs from './CircleGraphs'
import Summary from './Summary.js'

import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 80%;
`

export default () =>
  <Section title='Time on Market' summary='Listed for sale for 189 days' >
    <Wrapper>
      <CircleGraphs />
      <Summary />
    </Wrapper>
  </Section>
