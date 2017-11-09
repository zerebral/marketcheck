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
      showPages: 0
    }
  }

  totalPages () {
    const perPage = 11
    const numFounds = this.props.totalFound

    return numFounds/perPage
  }

  showPages () {
    return this.totalPages() / 5
  }

  componentDidMount () {
    this.setState({
      totalPages: this.totalPages(),
      showPages: this.showPages()
    })
  }

  render () {
    console.log(this.state.currentPage, this.state.totalPages)
    return (
      <PagesContainer>
        {this.state.currentPage > 1 ?
          (<PageNumber>&#60;&#60;</PageNumber>)
          (<PageNumber>&#60;</PageNumber>)
        : null }
        
        <PageNumber>1</PageNumber>
        <PageNumber className='current'>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>...</PageNumber>
        <PageNumber>15</PageNumber>
        <PageNumber>16</PageNumber>

        {(this.state.currentPage < this.state.totalPages) ?
          (<PageNumber>&#062;</PageNumber>)
          (<PageNumber>&#062;&#062;</PageNumber>)
        : null }
      </PagesContainer>
    )
  }
}

export default Paginator
