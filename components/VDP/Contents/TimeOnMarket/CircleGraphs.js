import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend
} from 'recharts'
import { colors } from '%/styles'
import CircleGraphWrapper from './CircleGraphsWrapper'

import styled from 'styled-components'

const thisCar = [
  {name: 'Rest of year', value: 176},
  {name: 'Listed for sale', value: 189}
]

const LegendWrapper = styled.div`
  text-align: center;
`

const BlueText = styled.p`
  color: ${colors.blue};
`
const NormalText = styled.p`
  color: ${colors.gray};
`

const CustoLegend = (props) =>
  <LegendWrapper>
    <BlueText>189 days</BlueText>
    <NormalText>This Car</NormalText>
  </LegendWrapper>

export default () =>
  <CircleGraphWrapper>
    <ResponsiveContainer width='100%' height={165} >
      <PieChart>
        <Pie
          data={thisCar}
          nameKey='name'
          valueKey='value'
          outerRadius={80}
          innerRadius={60}
          fill='#dae0e8'
          activeIndex={1}
          activeShape={{ fill: colors.blue }}
          startAngle={90}
          endAngle={450}
        />
        <Legend content={CustoLegend} />
      </PieChart>
    </ResponsiveContainer>
  </CircleGraphWrapper>
