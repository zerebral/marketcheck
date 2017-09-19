import {
  Section,
  Title,
  Summary
} from './Components'

import {
  Container,
  FlexRow,
  FlexCol
} from '~/layout'

export default ({ title, summary, center, children }) =>
  <Section>
    <Container>
      <FlexRow justify='center'>
        <FlexCol cols={center ? 12 : 3}>
          <Title>{title}</Title>
          {summary && <Summary>{summary}</Summary>}
        </FlexCol>

        <FlexCol cols={center ? 12 : 9}>
          {children}
        </FlexCol>
      </FlexRow>
    </Container>
  </Section>
