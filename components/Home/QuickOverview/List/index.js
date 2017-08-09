import { Column } from '~/layout'
import ListType from './ListType'
import Popular from './Popular'

import styled from 'styled-components'
import { em } from 'polished'

const List = styled.div`
  margin-bottom: ${em(75)};
`

export default ({
  type,
  populars
}) =>
  <Column laptop={{ cols: 3 }}>
    <List>
      <ListType>{ type }</ListType>
      { populars.map((p, index) =>
        <Popular
          key={index + p.brand}
          brand={p.brand}
          listings={p.listings}
          startingPrice={p.startingPrice}
        />
      ) }
    </List>
  </Column>
