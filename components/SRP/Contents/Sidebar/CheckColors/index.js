import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'

import Collapsible from '../Collapsible'

const Content = styled.div`
  padding: 0 1.5em;
`

const CheckColor = styled.div`
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-block;
  border-radius: 50%;
  margin: 0.5em;
  padding: 0.3em;

  &.checked {
    border: 1px solid ${colors.softblue};
  }
`

const CircleColor = styled.div`
  background: linear-gradient(-45deg, ${props => props.colorFinal} 0%, ${props => props.colorFrom} 100%);
  border-radius: 50%;
  height: 15px;
  width: 15px;
`

class CheckColors extends Component {
  constructor (props) {
    super(props)

    this.label = this.props.label
    this.colorButtons = this.props.colorButtons
    this.CheckValue = ''

    this.state = {
      checked: null
    }
  }

  handleCheckClick (index, value) {
    this.CheckValue = value

    this.setState({
      checked: index
    })
  }

  render () {
    return (
      <Collapsible label={this.label}>
        <Content>
          {this.colorButtons.map(function (item, index) {
            return (
              <CheckColor key={index} className={this.state.checked === index ? 'checked' : ''} onClick={() => this.handleCheckClick.bind(this)(index, item.value)}>
                <CircleColor colorFrom={item.colorFrom} colorFinal={item.colorFinal} />
              </CheckColor>
            )
          }.bind(this))}
        </Content>
      </Collapsible>
    )
  }
}

export default CheckColors
