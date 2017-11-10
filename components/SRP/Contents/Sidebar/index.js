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

const listGenerator = (response) => {
  let list = []

  response.map((trim, index) => {
    list.push({
      label: trim.item,
      value: trim.item
    })
  })

  return list
}

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
    value: 'Any',
  },
  {
    label: 'Convertible',
    value: 'Convertible',
  },
  {
    label: 'Coupe',
    value: 'Coupe',
  },
  {
    label: 'Sedan',
    value: 'Sedan',
  },
  {
    label: 'Wagon',
    value: 'Wagon',
  },
]


const dateList = [
  {
    label: '1 day ago',
    value: '1'
  },
  {
    label: '3 day ago',
    value: '3'
  },
  {
    label: '7 day ago',
    value: '7'
  },
  {
    label: '2 week ago',
    value: '15'
  },
  {
    label: 'One month ago',
    value: '30'
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

  return (<SidebarFlexCol>
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
      <SimpleCheckbox label='Trim' list={listGenerator(props.responseFactory.facets.trim)} updateSuperState={props.updateTrim} resetBtn />
      <SimpleCheckbox label='Drivetrain'  list={listGenerator(props.responseFactory.facets.drivetrain)} updateSuperState={props.updateDrivetrain} />
      <SimpleCheckbox label='Cylinders' list={listGenerator(props.responseFactory.facets.cylinders)} updateSuperState={props.updateCylinders} />
      <SimpleCheckbox label='Fuel' list={listGenerator(props.responseFactory.facets.fuel_type)} updateSuperState={props.updateFuelType} />
      {false ? <RatingStars {...props} label='Dealer Ratings' /> : null}      
      {false ? <SwitchBtns {...props} label='Features' /> : null}
      <SimpleCheckbox label='Listed' list={dateList} updateSuperState={props.updateDayListed} />
    </Wrapper>
  </SidebarFlexCol>)
}
