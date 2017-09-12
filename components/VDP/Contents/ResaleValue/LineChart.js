import styled from 'styled-components'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis
} from 'recharts'

import data from './seedData.js'

const LineWrapper = styled.div`
  position: relative;
`

export default () =>
  <LineWrapper>
    <ResponsiveContainer height={100}>
      <LineChart data={data}>
        <XAxis dataKey='name' />
        <YAxis domain={['dataMin', 'dataMax']} />
        <Line dataKey='a' />
        <Line dataKey='b' />
        <Line dataKey='c' />
      </LineChart>
    </ResponsiveContainer>
  </LineWrapper>
