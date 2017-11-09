import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'

const PagesContainer = styled.div`
  margin-bottom: 1em;
  text-align: right;
  ${mediaMax.phone`
    display: none;
  `}
`

const PageNumber = styled.span`
  color: ${colors.gray};
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 300;
  margin: 0 0.2em;
  padding: 0.2em 0.5em;

  &.current {
    background-color: ${colors.softblue};
    border-radius: 1em;
    color: ${colors.white};
  }
`

class Paginator extends Component {

  constructor (props) {
    super(props)

    this.state = {
      currentPage: 1,
      totalPages: 0,
      showPages: 0,
      ready: false
    }
  }

  totalPages () {
    const perPage = 11
    const numFounds = this.props.totalFound

    return Math.floor(numFounds/perPage)
  }

  showPages () {
    return Math.floor((this.totalPages() / 5) - 1)
  }

  componentDidMount () {
    this.setState({
      totalPages: this.totalPages(),
      showPages: this.showPages(),
      ready: true
    })
  }

  render () {
    const {ready} = this.state
    return ready ? (
      <PagesContainer>
        {this.state.currentPage > 1 ?
          (<span>
            <PageNumber>&#60;&#60;</PageNumber>
            <PageNumber>&#60;</PageNumber>
          </span>)
        : null }

        {Array(this.state.showPages).fill(1).map((page, index) => {
          return <PageNumber key={index} className='current'>{page}</PageNumber>
        })}

        {this.state.currentPage < this.state.totalPages ?
          (<span>
            <PageNumber>&#062;</PageNumber>
            <PageNumber>&#062;&#062;</PageNumber>
          </span>)
        : null }
      </PagesContainer>
    ) : null
  }
}

export default Paginator
