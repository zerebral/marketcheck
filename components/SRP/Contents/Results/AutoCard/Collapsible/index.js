import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '%/styles'

const Container = styled.div`
  display: block;
`

const Content = styled.div`
  background-color: ${colors.white};
  height: 0;
  transform: scaleY(0);

  &.close {
    height: 0;
    transform-origin: top;
    transform: scaleY(0);
    transition: height 0.2s ease-out, transform 0.2s ease-out, padding 0.2s ease-out, margin 0.2s ease-out;
  }

  &.open {
    height: 100%;
    transform-origin: top;
    transform: scaleY(1);
    transition: height 0.2s ease-out, transform 0.2s ease-out, padding 0.2s ease-out, margin 0.2s ease-out;
  }
`

class Collapsible extends Component {
  render () {
    return (
      <Container>
        <Content className={this.props.open ? 'open' : 'close'}>
          {this.props.children}
        </Content>
      </Container>
    )
  }
}

export default Collapsible
