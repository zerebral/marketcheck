import React from 'react'

import Slider from '~/Home/Slider'

import SliderStyles from '~/Home/Slider/SliderStyles'
import CustomSlickStyles from '~/Home/Slider/CustomStyles'

class SliderContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { alive: false }
  }

  componentDidMount () {
    this.setState({ alive: true })
  }

  componentWillMount () {
    SliderStyles()
    CustomSlickStyles()
  }

  render () {
    let { alive } = this.state
    return alive
      ? <Slider />
      : null
  }
}

export default SliderContainer
