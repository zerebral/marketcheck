import {
  ResponsiveContainer,
  PieChart,
  Pie
} from 'recharts'

import { colors } from '%/styles'
import ArrMaker from './ArrMaker.js'

const Circle = () =>
  <ResponsiveContainer height={320} >
    <PieChart>
      <defs>
        <linearGradient id='colorGreen' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0' stopColor={colors.green} stopOpacity='0.45' />
          <stop offset='1' stopColor={colors.white} stopOpacity='0.7' />
        </linearGradient>
      </defs>
      <path
        d='M425,160a144,144,0,1,1,305,.23Z'
        opacity='0.46'
        fill='url(#colorUv)'
      />
      <Pie
        data={ArrMaker(8.6)}
        nameKey='name'
        dataKey='value'
        outerRadius='100%'
        innerRadius='95%'
        fill='#dae0e8'
        activeIndex={0}
        activeShape={{ fill: colors.green }}
        startAngle={180}
        endAngle={0}
      />
    </PieChart>
  </ResponsiveContainer>

export default Circle
