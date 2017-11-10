import SelectWrapper from './SelectWrapper'
import Select from './Select'
import Caret from './Caret'

export default (props) =>
  <SelectWrapper blue={props.blue} showForMobile={props.showForMobile}>
    <Select {...props}>
      { props.children }
    </Select>
    <Caret />
  </SelectWrapper>
