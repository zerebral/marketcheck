import { FlexCol } from '~/layout'
import Wrapper from './Wrapper'
import SearchArgument from './SearchArgument'
import Filters from './Filters'

const listFilters = [
  {
    label: 'Make:',
    filter: 'Toyota'
  },
  {
    label: 'Type:',
    filter: 'New'
  },
  {
    label: 'Model:',
    filter: 'Sienna'
  },
  {
    label: 'Transmission:',
    filter: 'Automatic'
  }
]

export default () =>
  <FlexCol>
    <Wrapper>
      <SearchArgument argument='Used 2015 Audi A5 in Atlanta, GA' location='Atlanta, GA' />
      <Filters list={listFilters} />
    </Wrapper>
  </FlexCol>
