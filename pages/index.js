import React from 'react'
import styled from 'styled-components'
import Trust from '../assets/trust.svg'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const SVG = styled.div`
  max-width: 600px;
  & > svg {
    max-width: 100%;
  }
`

export default () => (
  <div>
    <Title>Hello World!</Title>
    <SVG>
      <Trust />
    </SVG>
  </div>
)
