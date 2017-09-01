import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  Legend,
  XAxis,
  YAxis
} from 'recharts'

import { colors } from '%/styles'

import { data } from './seedData'

import LineChartWrapper from './LineChartWrapper.js'

export default () =>
  <LineChartWrapper>
    <ResponsiveContainer width='100%' height={110}>
      <LineChart data={data}>
        <XAxis hide />
        <YAxis hide />
        <Legend />
        <Tooltip />
        <Line type='monotone' dataKey='pv' stroke={colors.blue} dot={false} legendType='circle' />
        <Line type='monotone' dataKey='uv' stroke={colors.green} dot={false} legendType='circle' />
      </LineChart>
    </ResponsiveContainer>
  </LineChartWrapper>
