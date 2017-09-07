import styled from 'styled-components'
import React from 'react'
import LineChart from './LineChart.js'

const SingleChart = styled.div`
  margin-bottom: 60px;
`

export default ({
  value,
  remaining,
  color
}) =>
  <SingleChart>
    <LineChart value={value} remaining={remaining} color={color} />
  </SingleChart>
