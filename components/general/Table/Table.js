import {
  Table,
  TRow,
  THeader,
  TCol,
  Text,
  Title
} from './Components'

export default () =>
  <Table>
    <THeader>
      <TCol>
        <Title>Same Car Models</Title>
      </TCol>
      <TCol>
        <Title>Avg. Price</Title>
      </TCol>
      <TCol>
        <Title>Avg. Mileage</Title>
      </TCol>
      <TCol>
        <Title>Avg. Market Value</Title>
      </TCol>
    </THeader>

    <TRow>
      <TCol>
        <Text>2017 Toyota Camry</Text>
      </TCol>
      <TCol>
        <Text>$14,345</Text>
      </TCol>
      <TCol>
        <Text>25,656 mi</Text>
      </TCol>
      <TCol>
        <Text>$17,345</Text>
      </TCol>
    </TRow>
    <TRow>
      <TCol>
        <Text>2017 Toyota Camry</Text>
      </TCol>
      <TCol>
        <Text>$14,345</Text>
      </TCol>
      <TCol>
        <Text>25,656 mi</Text>
      </TCol>
      <TCol>
        <Text>$17,345</Text>
      </TCol>
    </TRow>
    <TRow>
      <TCol>
        <Text>2017 Toyota Camry</Text>
      </TCol>
      <TCol>
        <Text>$14,345</Text>
      </TCol>
      <TCol>
        <Text>25,656 mi</Text>
      </TCol>
      <TCol>
        <Text>$17,345</Text>
      </TCol>
    </TRow>
    <TRow>
      <TCol>
        <Text>2017 Toyota Camry</Text>
      </TCol>
      <TCol>
        <Text>$14,345</Text>
      </TCol>
      <TCol>
        <Text>25,656 mi</Text>
      </TCol>
      <TCol>
        <Text>$17,345</Text>
      </TCol>
    </TRow>
  </Table>
