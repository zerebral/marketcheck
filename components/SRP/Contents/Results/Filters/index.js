import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import XIcon from './x.svg'

const Container = styled.div`
  background-color: ${colors.white};
  margin-bottom: 1em;
`

const Filter = styled.div`
  background-color: ${colors.lightgray};
  border-radius: 0.5em;
  display: inline-block;
  font-size: 0.8em;
  font-weight: 300;
  margin-right: 1em;
  padding: 0.5em 1em;

  ${mediaMax.largeTablet`
    margin-right: 0.5em;
  `}
`

const Label = styled.span`
  color: ${colors.lightergray};
  font-weight: 300;
  margin-right: 0.5em;

  ${mediaMax.largeTablet`
    font-size: 11px;
  `}
`

const Value = styled.span`
  color: ${colors.darkengray};
  font-weight: 300;
  margin-right: 0.5em;

  ${mediaMax.largeTablet`
    font-size: 11px;
  `}
`

const XBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  height: 8px;
  width: 8px;
`

class Results extends Component {
  constructor (props) {
    super(props)

    this.newList = []

    this.state = {
      list: this.props.list
    }
  }

  deleteFilter (index) {
    this.newList = this.state.list
    delete this.newList[index]

    this.setState({
      list: this.newList
    })
  }

  render () {
    return (
      <Container>
        {this.state.list.map(function (item, index) {
          return (
            <Filter key={index}>
              <Label>{item.label}</Label>
              <Value>{item.filter}</Value>
              <XBtn onClick={() => this.deleteFilter.bind(this)(index)}>
                <XIcon />
              </XBtn>
            </Filter>
          )
        }.bind(this))}
      </Container>
    )
  }
}

export default Results
