import React from 'react'
import Body from './Body'
import CloseButton from './CloseButton'
import Header from './Header'
import Title from './Title'
import Toggle from './Toggle'
import Wrapper from './Wrapper'
import { Close, More } from './Icons'

import autobind from 'class-autobind'
import PropTypes from 'prop-types'

class Accordion extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {
      open: this.props.open,
      height: this.bodyHeight
    }
    autobind(this)
  }

  componentDidMount () {
    this.bodyHeight = `${this.body.clientHeight}px`
    this.forceUpdate()
  }

  calculateHeight () {
    this.setState = {
      height: this.props.open ? this.bodyHeight : 0
    }
  }

  toggleAccordion (e) {
    e.preventDefault()
    this.setState = {
      open: !this.props.open
    }
  }

  render () {
    const { title, children } = this.props
    const { open, height } = this.state

    this.calculateHeight()
    return (
      <Wrapper open={open}>
        <Header open={open}>
          <Title>{title}</Title>
          <Toggle onClick={this.toggleAccordion}><More /></Toggle>
        </Header>
        <Body height={height} innerRef={body => { this.body = body }}>
          {children}
          <CloseButton onClick={this.toggleAccordion}>
            <Close />
          </CloseButton>
        </Body>
      </Wrapper>
    )
  }
}

Accordion.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Accordion
