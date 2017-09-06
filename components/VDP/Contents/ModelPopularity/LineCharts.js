import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

import { colors } from '%/styles'

const data = [
  { name: 'Total', value: 47, remaining: 21 }
]

export default () =>
  <ResponsiveContainer height={8}>
    <BarChart data={data} layout='vertical' margin={{ top: 0, bottom: 0, left: 0, right: 0 }} barSize={6} >
      <XAxis type='number' domain={['dataMin', 'dataMax']} hide />
      <YAxis type='category' hide />
      <Bar stackId='a' dataKey='value' fill={colors.green} />
      <Bar stackId='a' dataKey='remaining' fill={colors.chartgray} />
      <Tooltip />
    </BarChart>
  </ResponsiveContainer>
