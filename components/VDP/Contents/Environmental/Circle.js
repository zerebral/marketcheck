import {
  ResponsiveContainer,
  PieChart,
  Pie
} from 'recharts'

import { colors } from '%/styles'

const data = [
  { name: 'Score', value: 8.6 },
  { name: 'Rest', value: 1.4 }
]

const Circle = () =>
  <ResponsiveContainer height={300}>
    <PieChart>
      <Pie
        data={data}
        nameKey='name'
        dataKey='value'
        outerRadius='100%'
        innerRadius='95%'
        fill='#dae0e8'
        activeIndex={0}
        activeShape={{ fill: colors.blue }}
        startAngle={180}
        endAngle={0}
      />
    </PieChart>
  </ResponsiveContainer>

export default Circle
