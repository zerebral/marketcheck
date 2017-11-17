import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'

import Collapsible from '../Collapsible'

const StyledFlexRow = styled(FlexRow)`
  padding-bottom: 0.5em;
`

const StyledFlexCol = styled(FlexCol)`
  max-width: 10%;
`

const CheckBox = styled.div`
  border: 2px solid ${colors.bordergray};
  cursor: pointer;
  height: 15px;
  width: 15px;

  &.checked {
    background-color: ${colors.darkengray};
  }
`

const Label = styled.label`
  cursor: pointer;
  font-weight: 300;
`

const MoreBtn = styled.a.attrs({
  href: '#'
})`
  color: ${colors.softblue};
  font-size: 0.8em;
  font-weight: 300;

  &:hover {
    text-decoration: underline;
  }
`

class SimpleCheckbox extends Component {
  constructor (props) {
    super(props)

    this.label = this.props.label
    this.CheckValue = ''

    this.state = {
      checked: null,
      list: this.props.list,
      listLimit: 5,
      reset: false
    }
  }

  handleResetClick (value) {
    this.setState({
      checked: null,
      listLimit: 5,
      reset: value
    }).bind(this)

    this.props.updateSuperState(null)
  }

  handleCheckClick (index, value) {

    this.setState({
      checked: index
    })
    this.props.updateSuperState(value)
  }

  updateListLimit (e) {
    e.preventDefault()

    const limit = this.state.listLimit + 5

    this.setState({
      listLimit: limit
    })
  }

  componentWillReceiveProps () {
    if (this.props.resetState) {
      this.setState({
        checked: null
      })
    }
  }

  render () {
    return (
      <Collapsible {...this.props} parentReset={this.handleResetClick.bind(this)}>
        {this.state.list.map(function (item, index) {
          if (index < this.state.listLimit) {
            return (
              <StyledFlexRow key={index}>
                <StyledFlexCol>
                  <CheckBox className={this.state.checked === index ? 'checked' : ''} onClick={() => this.handleCheckClick.bind(this)(index, item.value)} />
                </StyledFlexCol>
                <FlexCol>
                  <Label onClick={() => this.handleCheckClick.bind(this)(index, item.value)}>{item.label} {item.count ? '('+item.count+')' : ''}</Label>
                </FlexCol>
              </StyledFlexRow>
            )
          } else {
            return null
          }
        }.bind(this))}
        { this.props.resetBtn && this.state.list.length > this.state.listLimit ? <MoreBtn onClick={this.updateListLimit.bind(this)}>More</MoreBtn> : ''}
      </Collapsible>
    )
  }
}

export default SimpleCheckbox
