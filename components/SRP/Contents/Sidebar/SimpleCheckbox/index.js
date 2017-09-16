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
    this.list = this.props.list
    this.CheckValue = ''

    this.state = {
      checked: null,
      reset: false
    }
  }

  handleResetClick (value) {
    this.setState({
      checked: null,
      reset: value
    }).bind(this)

    this.CheckValue = ''
  }

  handleCheckClick (index, value) {
    this.CheckValue = value

    this.setState({
      checked: index
    })
  }

  render () {
    return (
      <Collapsible {...this.props} parentReset={this.handleResetClick.bind(this)}>
        {this.list.map(function (item, index) {
          return (
            <StyledFlexRow key={index}>
              <StyledFlexCol>
                <CheckBox className={this.state.checked === index ? 'checked' : ''} onClick={() => this.handleSelectClick.bind(this)(index, item.value)} />
              </StyledFlexCol>
              <FlexCol>
                <Label onClick={() => this.handleCheckClick.bind(this)(index, item.value)}>{item.label}</Label>
              </FlexCol>
            </StyledFlexRow>
          )
        }.bind(this))}
        { this.props.resetBtn ? <MoreBtn>More</MoreBtn> : ''}
      </Collapsible>
    )
  }
}

export default SimpleCheckbox
