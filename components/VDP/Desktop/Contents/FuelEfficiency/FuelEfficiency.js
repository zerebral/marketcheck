import Section from '~/VDP/Section'
import Stats from './Stats.js'
import Text from './Text'

import {
  PriceHeader,
  Money,
  FuelExpense,
  Separator
} from './Components'

import { FlexRow, FlexCol } from '~/layout'

export default () =>
  <Section title='Fuel Efficiency' summary='Based upon avg. fuel prices across the US.'>

    <FlexRow>
      <FlexCol cols={5}>
        <Stats />
      </FlexCol>
      <FlexCol cols={5} offset={1}>
        <PriceHeader>$<Money>64</Money></PriceHeader>
        <FuelExpense>Monthly fue Expense</FuelExpense>
        <Separator />
        <Text />
      </FlexCol>
    </FlexRow>
  </Section>
