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
  render () {
    return (
      <PagesContainer>
        <PageNumber>1</PageNumber>
        <PageNumber className='current'>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>...</PageNumber>
        <PageNumber>15</PageNumber>
        <PageNumber>16</PageNumber>
        <PageNumber>&#062;</PageNumber>
        <PageNumber>&#062;&#062;</PageNumber>
      </PagesContainer>
    )
  }
}

export default Paginator
