import React, { Component } from 'react'
import styled from 'styled-components'

import SliderStyle from 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'
import { currency, number } from '%/format'

import Collapsible from '../Collapsible'

const Range = Slider.Range

const Control = styled(Range)`
  ${SliderStyle};
`

const Price = styled.span`
  display: block;
  padding-top: 1em;
  text-align: ${props => props.align};
`

class DoubleRange extends Component {
  constructor (props) {
    super(props)

    this.label = this.props.label
    this.currency = this.props.currency
    this.min = this.props.min
    this.max = this.props.max
    this.value = this.props.value

    this.state = {
      bound: this.value,
      value: this.value
    }
  }

  onBoundChange = (e) => {
    this.setState({ bound: +e.target.value })
  }

  onSliderChange = (value) => {
    this.setState({
      value
    })
  }

  handleApply = () => {
    const { bound } = this.state

    this.setState({ value: [bound] })
  }

  render () {
    return (
      <Collapsible label={this.label}>
        <Control
          range
          min={this.min}
          max={this.max}
          value={this.state.value}
          onChange={this.onSliderChange.bind(this)}
          trackStyle={[{ backgroundColor: colors.softblue }]}
          handleStyle={[{ backgroundColor: colors.softblue, border: 'none' }, { backgroundColor: colors.softblue, border: 'none' }]}
          railStyle={{ backgroundColor: colors.bordergray }} />
        <FlexRow>
          <FlexCol>
            <Price align='left'>{this.currency ? currency(this.state.value[0]) : number(this.state.value[0])}</Price>
          </FlexCol>
          <FlexCol>
            <Price align='right'>{this.currency ? currency(this.state.value[1]) : number(this.state.value[1])}</Price>
          </FlexCol>
        </FlexRow>
      </Collapsible>
    )
  }
}

export default DoubleRange
