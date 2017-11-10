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
    colorFrom: '#FFFFFF',
    colorFinal: '#F2F2F2',
    value: 'White'
  },
  {
    colorFrom: '#C0C0C0',
    colorFinal: '#E8E8E8',
    value: 'Silver'
  },
  {
    colorFrom: '#000000',
    colorFinal: '#444444',
    value: 'Black'
  },
  {
    colorFrom: '#808080',
    colorFinal: '#A0A0A0',
    value: 'Gray'
  },
  {
    colorFrom: '#0000FF',
    colorFinal: '#4C4CFF',
    value: 'Blue'
  },
  {
    colorFrom: '#FF0000',
    colorFinal: '#FF4747',
    value: 'Red'
  },
  {
    colorFrom: '#800000',
    colorFinal: '#7F3030',
    value: 'Brown'
  },
  {
    colorFrom: '#00961B',
    colorFinal: '#54935E',
    value: 'Green'
  },
  {
    colorFrom: '#F5F5DC',
    colorFinal: '#F4F4EB',
    value: 'Beige'
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
      <InputRange {...props} label='Distance' min={0} max={300} step={10} value={40} updateSuperState={props.updateDistance} />
      <DoubleRange {...props} label='Price' currency min={4000} max={50000} step={10} value={[4000, 50000]} updateSuperState={props.updatePrice} />
      <DoubleRange {...props} label='Miles Range' min={4000} max={50000} step={10} value={[4000, 50000]} updateSuperState={props.updateMilesRange} />
      <SimpleCheckbox {...props} {...props} label='Deals' list={list} updateSuperState={props.updateDealsRating} />
      <SearchCheckbox {...props} label='Models' list={props.sessionSearch.modelsList} updateSuperState={props.updateModelList} resetBtn />
      <InputYear {...props} label='Year' updateSuperState={props.updateYear} />
      <GroupIconBtn {...props} label='Seller Type' labelOne='Dealer' labelTwo='FSBO' updateSuperState={props.updateSellerType} />
      <CheckColors {...props} label='Color' colorButtons={colorButtons} updateSuperState={props.updateColor} />
      <SimpleCheckbox {...props} label='Transmission' list={transmissionList} updateSuperState={props.updateTransmission} />
      <SimpleCheckbox {...props} label='Body' list={bodyList} updateSuperState={props.updateBodyType} />
      <SimpleCheckbox {...props} label='Trim' list={listGenerator(props.responseFactory.facets.trim)} updateSuperState={props.updateTrim} resetBtn />
      <SimpleCheckbox {...props} label='Drivetrain'  list={listGenerator(props.responseFactory.facets.drivetrain)} updateSuperState={props.updateDrivetrain} />
      <SimpleCheckbox {...props} label='Cylinders' list={listGenerator(props.responseFactory.facets.cylinders)} updateSuperState={props.updateCylinders} />
      <SimpleCheckbox {...props} label='Fuel' list={listGenerator(props.responseFactory.facets.fuel_type)} updateSuperState={props.updateFuelType} />
      {false ? <RatingStars {...props} label='Dealer Ratings' /> : null}      
      {false ? <SwitchBtns {...props} label='Features' /> : null}
      <SimpleCheckbox {...props} label='Listed' list={dateList} updateSuperState={props.updateDayListed} />
    </Wrapper>
  </SidebarFlexCol>)
}
