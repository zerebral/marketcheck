import React, { Component } from 'react'
import { FlexCol } from '~/layout'
import Wrapper from './Wrapper'
import SearchArgument from './SearchArgument'
import Filters from './Filters'
import AutoCard from './AutoCard'

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

class Results extends Component {
  constructor (props) {
    super(props)

    this.listFilters = listFilters
    this.result = result
  }

  render () {
    return (
      <FlexCol>
        <Wrapper>
          <SearchArgument argument='Used 2015 Audi A5 in Atlanta, GA' location='Atlanta, GA' />
          <Filters list={this.listFilters} />
          {this.result.map((item, index) =>
            <AutoCard data={item} />
          )}
        </Wrapper>
      </FlexCol>
    )
  }
}

export default Results
