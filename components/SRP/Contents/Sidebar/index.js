import styled from 'styled-components'
import { colors } from '%/styles'
import { mediaMax } from '%/styles/mixins'
import { FlexCol } from '~/layout'
import Wrapper from './Wrapper'
import GroupBtn from './GroupBtn'
import InputRange from './InputRange'
import DoubleRange from './DoubleRange'
import SimpleCheckbox from './SimpleCheckbox'
import SearchCheckbox from './SearchCheckbox'
import InputYear from './InputYear'
import GroupIconBtn from './GroupIconBtn'
import CheckColors from './CheckColors'
import RatingStars from './RatingStars'
import SwitchBtns from './SwitchBtns'
import ClearAllBtn from './ClearAllBtn'

const buttons = [
  {
    label: 'Used',
    value: 'used'
  },
  {
    label: 'New',
    value: 'new'
  },
  {
    label: 'Certified',
    value: 'certified'
  }
]

const list = [
  {
    label: 'Great Deal',
    value: 'grea-deal'
  },
  {
    label: 'Good Deal',
    value: 'good-deal'
  },
  {
    label: 'Fair Deal',
    value: 'fair-deal'
  },
  {
    label: 'Bad Deal',
    value: 'bad-deal'
  }
]

const searchablelist = [
  {
    label: 'Great Deal',
    value: 'grea-deal'
  },
  {
    label: 'Good Deal',
    value: 'good-deal'
  },
  {
    label: 'Fair Deal',
    value: 'fair-deal'
  },
  {
    label: 'Bad Deal',
    value: 'bad-deal'
  },
  {
    label: 'Great Deal',
    value: 'grea-deal'
  },
  {
    label: 'Good Deal',
    value: 'good-deal'
  },
  {
    label: 'Fair Deal',
    value: 'fair-deal'
  },
  {
    label: 'Bad Deal',
    value: 'bad-deal'
  }
]

const colorButtons = [
  {
    colorFrom: '#8B8B8B',
    colorFinal: '#464546',
    value: 'gray'
  },
  {
    colorFrom: '#FB6173',
    colorFinal: '#FE364B',
    value: 'red'
  },
  {
    colorFrom: '#8B8B8B',
    colorFinal: '#464546',
    value: 'gray'
  },
  {
    colorFrom: '#8B8B8B',
    colorFinal: '#464546',
    value: 'gray'
  },
  {
    colorFrom: '#8B8B8B',
    colorFinal: '#464546',
    value: 'gray'
  },
  {
    colorFrom: '#8B8B8B',
    colorFinal: '#464546',
    value: 'gray'
  },
  {
    colorFrom: '#8B8B8B',
    colorFinal: '#464546',
    value: 'gray'
  },
  {
    colorFrom: '#8B8B8B',
    colorFinal: '#464546',
    value: 'gray'
  },
  {
    colorFrom: '#8B8B8B',
    colorFinal: '#464546',
    value: 'gray'
  }
]

const SidebarFlexCol = styled(FlexCol)`
  max-width: 250px;

  ${mediaMax.desktop`
    left: auto;
    max-width: 25%;
  `}

  ${mediaMax.largeTablet`
    left: auto;
    max-width: 30%;
  `}

  ${mediaMax.phone`
    background-color: ${colors.white};
    max-width: 100%;
    padding: 2em 4em;
  `}
`

export default ({props}) =>
  <SidebarFlexCol>
    <Wrapper>
      <ClearAllBtn {...props}/>
      <GroupBtn {...props} label='Type' buttons={buttons} />
      <InputRange {...props} label='Distance' min={0} max={300} step={10} value={40} />
      <DoubleRange {...props} label='Price' valuePrefix='$' min={400} max={50000} step={10} value={[400, 50000]} />
      <DoubleRange {...props} label='Miles Range' min={400} max={50000} step={10} value={[400, 50000]} />
      <SimpleCheckbox {...props} label='Deals' list={list} />
      <SearchCheckbox {...props} label='Models' list={searchablelist} resetBtn />
      <InputYear {...props} label='Year' />
      <GroupIconBtn {...props} label='Seller Type' labelOne='Dealer' labelTwo='FSBO' />
      <CheckColors {...props} label='Color' colorButtons={colorButtons} />
      <SimpleCheckbox {...props} label='Transmission' list={list} />
      <SimpleCheckbox {...props} label='Body' list={list} />
      <SimpleCheckbox {...props} label='Trim' list={list} resetBtn />
      <SimpleCheckbox {...props} label='Drivetrain' list={list} />
      <SimpleCheckbox {...props} label='Cylinders' list={list} />
      <SimpleCheckbox {...props} label='Fuel' list={list} />
      <RatingStars {...props} label='Dealer Ratings' />
      <SwitchBtns {...props} label='Features' />
      <SimpleCheckbox {...props} label='Listed' list={list} />
    </Wrapper>
  </SidebarFlexCol>
