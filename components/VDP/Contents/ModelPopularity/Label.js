import styled from 'styled-components'
import React from 'react'

const Label = styled.text`
  color: #19212b;
  font-size: 14px;
  line-height: 1;
  fill-opacity: 0.56;
  transform: translateX(-50%);
`
export default (props) => {
  const { width, y, remaining, height, value } = props
  const total = value + remaining
  const percentage = Math.round(value / total * 100)
  return (
    <Label
      x={width}
      y={y + height * 4.5}
      dx='-4.5%'
    >
      {percentage}%
    </Label>
  )
}
