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
    value: 'great'
  },
  {
    label: 'Good Deal',
    value: 'good'
  },
  {
    label: 'Fair Deal',
    value: 'fair'
  },
  {
    label: 'Bad Deal',
    value: 'bad'
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

const transmissionList = [
  {
    label: 'Automatic',
    value: 'automatic'
  },
  {
    label: 'Manual',
    value: 'manual'
  }
]

const bodyList = [
  {
    label: 'Any',
    value: 'Any'
  },
  {
    label: 'Convertible',
    value: 'Convertible'
  },
  {
    label: 'Coupe',
    value: 'Coupe'
  },
  {
    label: 'Sedan',
    value: 'Sedan'
  },
  {
    label: 'Wagon',
    value: 'Wagon'
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

export default (props) => {
  return (
  <SidebarFlexCol>
    <Wrapper>
      <ClearAllBtn {...props} />
      <GroupBtn {...props} label='Type' buttons={buttons} />
      <InputRange label='Distance' min={0} max={300} step={10} value={40} updateSuperState={props.updateDistance} />
      <DoubleRange label='Price' currency min={4000} max={50000} step={10} value={[4000, 50000]} updateSuperState={props.updatePrice} />
      <DoubleRange label='Miles Range' min={4000} max={50000} step={10} value={[4000, 50000]} updateSuperState={props.updateMilesRange} />
      <SimpleCheckbox label='Deals' list={list} updateSuperState={props.updateDealsRating} />
      <SearchCheckbox label='Models' list={props.sessionSearch.modelsList} updateSuperState={props.updateModelList} resetBtn />
      <InputYear label='Year' updateSuperState={props.updateYear} />
      <GroupIconBtn label='Seller Type' labelOne='Dealer' labelTwo='FSBO' updateSuperState={props.updateSellerType} />
      <CheckColors {...props} label='Color' colorButtons={colorButtons} />
      <SimpleCheckbox label='Transmission' list={transmissionList} updateSuperState={props.updateTransmission} />
      <SimpleCheckbox label='Body' list={bodyList} updateSuperState={props.updateBodyType} />
      <SimpleCheckbox {...props} label='Trim' list={list} resetBtn />
      <SimpleCheckbox {...props} label='Drivetrain' list={list} />
      <SimpleCheckbox {...props} label='Cylinders' list={list} />
      <SimpleCheckbox {...props} label='Fuel' list={list} />
      <RatingStars {...props} label='Dealer Ratings' />
      <SwitchBtns {...props} label='Features' />
      <SimpleCheckbox {...props} label='Listed' list={list} />
    </Wrapper>
  </SidebarFlexCol>
  )
}