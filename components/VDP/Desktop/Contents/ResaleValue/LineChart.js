import styled from 'styled-components'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis
} from 'recharts'

import data from './seedData.js'
import { colors } from '%/styles'

const LineWrapper = styled.div`
  margin-bottom: 30px;
`

export default () =>
  <LineWrapper>
    <ResponsiveContainer height={330}>
      <LineChart data={data} margin={{ left: 4, right: 4, top: 4, bottom: 4 }}>
        <XAxis
          dataKey='name'
          padding={{ left: 8, right: 8 }}
        />
        <YAxis
          domain={['dataMin', 'dataMax']}
          padding={{ top: 8, bottom: 8 }}
          type='number'
        />
        <Line dataKey='a'
          stroke={colors.blue}
          strokeWidth={2}
          dot={{ fill: colors.blue, strokeWidth: 8 }}
        />
        <Line dataKey='b'
          stroke={colors.orange}
          strokeWidth={2}
          dot={{ fill: colors.orange, strokeWidth: 8 }}
        />
        <Line dataKey='c'
          stroke={colors.green}
          strokeWidth={2}
          dot={{ fill: colors.green, strokeWidth: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </LineWrapper>
