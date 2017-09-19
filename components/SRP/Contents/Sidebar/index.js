import styled from 'styled-components'
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
`

export default () =>
  <SidebarFlexCol>
    <Wrapper>
      <GroupBtn label='Type' buttons={buttons} />
      <InputRange label='Distance' min={0} max={300} step={10} value={40} />
      <DoubleRange label='Price' valuePrefix='$' min={400} max={50000} step={10} value={[400, 50000]} />
      <DoubleRange label='Miles Range' min={400} max={50000} step={10} value={[400, 50000]} />
      <SimpleCheckbox label='Deals' list={list} />
      <SearchCheckbox label='Models' list={searchablelist} resetBtn />
      <InputYear label='Year' />
      <GroupIconBtn label='Seller Type' labelOne='Dealer' labelTwo='FSBO' />
      <CheckColors label='Color' colorButtons={colorButtons} />
      <SimpleCheckbox label='Transmission' list={list} />
      <SimpleCheckbox label='Body' list={list} />
      <SimpleCheckbox label='Trim' list={list} resetBtn />
      <SimpleCheckbox label='Drivetrain' list={list} />
      <SimpleCheckbox label='Cylinders' list={list} />
      <SimpleCheckbox label='Fuel' list={list} />
      <RatingStars label='Dealer Ratings' />
      <SwitchBtns label='Features' />
      <SimpleCheckbox label='Listed' list={list} />
    </Wrapper>
  </SidebarFlexCol>
