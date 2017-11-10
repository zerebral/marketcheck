import React, { Component } from 'react'
import styled from 'styled-components'
import Spinner from 'react-loading-animation'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import { capitalize, cutString } from '%/format'
import { FlexCol } from '~/layout'
import Wrapper from './Wrapper'
import SearchArgument from './SearchArgument'
import Filters from './Filters'
import AutoCard from './AutoCard'
import Paginator from './Paginator'
import Recommended from './Recommended'
import ListsBy from './ListsBy'
import TotalFound from './TotalFound'

import Result from './data.js'

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

    this.result = Result()
    this.saveSearch = props.saveSearch
    this.state = {
      ready: false
    }
  }

  searchArgument (state) {
    const argument = 
      capitalize(this.props.sessionSearch.filters.type) + " " +
      (this.props.sessionSearch.filters.year ? this.props.sessionSearch.filters.year + " " : "" ) +
      (this.props.sessionSearch.filters.maker ? this.props.sessionSearch.filters.maker + " " : "" ) +
      (this.props.sessionSearch.filters.model ? this.props.sessionSearch.filters.model + " " : "" ) +
      " in " +
      this.props.sessionSearch.location.address + " "

    return argument
  }

  filterTags (state) {
    const listFilters = [
      {
        label: 'Make:',
        filter: state.filters.maker,
        remove: this.props.removeMake
      },
      {
        label: 'Type:',
        filter: capitalize(state.filters.type),
        remove: this.props.removeType
      },
      {
        label: 'Model:',
        filter: Array.isArray(state.filters.model) ? state.filters.model.join(',') : state.filters.model,
        remove: this.props.removeModel
      },
      {
        label: 'Transmission:',
        filter: state.filters.transmission ? capitalize(state.filters.transmission) : " ",
        remove: this.props.removeTransmission
      }
    ]

    return listFilters
  }

  render () {
    return (
      <StyledFlexCol>
        <Wrapper>
          <SearchArgument argument={this.searchArgument(this.props.sessionSearch)} saveSearch={this.saveSearch} location={this.props.sessionSearch.location.address} />
          <Filters {...this.props} list={this.filterTags(this.props.sessionSearch)} />
          <TotalFound total={this.props.responseFactory.num_found} />
          {this.props.responseFactory.num_found ?
            this.props.readyRefreshFetch ?
              this.props.responseFactory.listings.map((item, index) =>
                (<AutoCard key={index} data={item} />)
              ) :
              <Spinner style={{marginTop: '5vh'}} /> :
            <div>
              <p>
                There are no results for the search
              </p>
              <br />
            </div>
          }
          <Paginator totalFound={this.props.responseFactory.num_found} updateSuperState={this.props.updatePagination} />
          <Recommended />
          <ListsBy />
        </Wrapper>
      </StyledFlexCol>
    )
  }
}

export default Results
