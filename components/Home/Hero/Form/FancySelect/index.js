import SelectWrapper from './SelectWrapper'
import Select from './Select'
import Caret from './Caret'

export default ({children}) =>
  <SelectWrapper>
    <Select>
      { children }
    </Select>
    <Caret />
  </SelectWrapper>
