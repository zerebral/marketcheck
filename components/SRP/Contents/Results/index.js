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

const NoResults = styled.div`
  font-size: 2em;
  margin-bottom: 1em;
  ${mediaMax.phone`
    display: none;
  `}
`

const Button = styled.a`
  cursor: pointer;
  font-size: 13px;
  line-height: 15.6px;
  color: #fff;
  background: ${colors.green};
  text-align: center;
  padding: 10px 12px;
  display: inline-block;
  border-radius: 4px;
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
      capitalize(this.props.sessionSearch.filters.car_type) + " " +
      (this.props.sessionSearch.filters.year ? this.props.sessionSearch.filters.year + " " : "" ) +
      (this.props.sessionSearch.filters.make ? this.props.sessionSearch.filters.make + " " : "" ) +
      (this.props.sessionSearch.filters.model ? this.props.sessionSearch.filters.model + " " : "" ) +
      " in " +
      this.props.sessionSearch.location.address + " "

    return argument
  }

  filterTags (state) {
    const listFilters = [
      {
        label: 'Make:',
        filter: state.filters.make,
        remove: this.props.removeMake
      },
      {
        label: 'Type:',
        filter: capitalize(state.filters.car_type),
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
          <SearchArgument argument={this.searchArgument(this.props.sessionSearch)} saveSearch={this.saveSearch} location={this.props.sessionSearch.location.address} total={this.props.responseFactory.num_found} />
          <Filters {...this.props} list={this.filterTags(this.props.sessionSearch)} />
          <TotalFound total={this.props.responseFactory.num_found} />
          {this.props.responseFactory.num_found && this.props.responseFactory.listings.length ?
            this.props.readyRefreshFetch ?
              this.props.responseFactory.listings.map((item, index) =>
                (<AutoCard {...this.props.sessionSearch} key={index} data={item} />)
              ) :
              <Spinner style={{marginTop: '5vh'}} /> :
            (<div style={{textAlign: 'center', padding: '4em'}}>
              <NoResults>Sorry, we could not get you that!</NoResults>
              <Button href="/">Lets start over</Button>
            </div>)
          }
          {this.props.responseFactory.num_found &&  this.props.responseFactory.num_found > 11 ?
            <Paginator {...this.props} totalFound={this.props.responseFactory.num_found} updateSuperState={this.props.updatePagination} /> :
            null
          }
          {false ? <Recommended /> : null }
          <ListsBy />
        </Wrapper>
      </StyledFlexCol>
    )
  }
}

export default Results
