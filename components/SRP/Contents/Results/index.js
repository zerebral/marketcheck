import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import { FlexCol } from '~/layout'
import Wrapper from './Wrapper'
import SearchArgument from './SearchArgument'
import Filters from './Filters'
import AutoCard from './AutoCard'
import Paginator from './Paginator'
import Recommended from './Recommended'
import ListsBy from './ListsBy'
import TotalFound from './TotalFound'

import result from './data.js'

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

const StyledFlexCol = styled(FlexCol)`
  ${mediaMax.desktop`
    left: auto;
    max-width: 75%;
  `}
  ${mediaMax.largeTablet`
    left: auto;
    max-width: 70%;
  `}
  ${mediaMax.phone`
    background-color: ${colors.bordergray};
    max-width: 100%;
    padding: 0;
  `}
`

class Results extends Component {
  constructor (props) {
    super(props)

    this.props = props
    this.listFilters = listFilters
    this.result = result

    console.log(props)
  }

  render () {
    return (
      <StyledFlexCol>
        <Wrapper>
          <SearchArgument argument='Used 2015 Audi A5 in Atlanta, GA' location='Atlanta, GA' />
          <Filters list={this.listFilters} />
          <TotalFound total={14} />
          {this.result.map((item, index) =>
            <AutoCard key={index} data={item} />
          )}
          <Paginator />
          <Recommended />
          <ListsBy />
        </Wrapper>
      </StyledFlexCol>
    )
  }
}

export default Results
